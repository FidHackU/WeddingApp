var SHEET_NAME_ALL = "RSVP";
var SHEET_NAME_ATTENDING = "Attending";
var SHEET_NAME_DECLINED = "Not Attending";
var SCRIPT_PROP = PropertiesService.getScriptProperties();

function doGet(e) { return handleResponse(e); }
function doPost(e) { return handleResponse(e); }

function handleResponse(e) {
    var lock = LockService.getPublicLock();
    lock.waitLock(30000);
    try {
        var doc = SpreadsheetApp.getActiveSpreadsheet();

        // Parse parameters
        var params = e.parameter;
        if (e.postData && e.postData.contents) {
            params = JSON.parse(e.postData.contents);
        }

        // Logic for "Accept" or "Decline"
        var attendingStatus = "Decline";
        if (params.attending === true || params.attending === "true" || params.attending === "yes" || params.attending === "Accept") {
            attendingStatus = "Accept";
        }

        var targetSheetName = (attendingStatus === "Accept") ? SHEET_NAME_ATTENDING : SHEET_NAME_DECLINED;

        // Prepare row data
        // Logic for Guests
        var guestNames = "";
        if (params.additionalGuests && Array.isArray(params.additionalGuests)) {
            guestNames = params.additionalGuests.filter(function (n) { return n && n.trim() !== ""; }).join(", ");
        } else if (params.additionalGuests) {
            guestNames = params.additionalGuests;
        }

        var rowData = [
            new Date(),
            params.name || "",
            params.phone || "",
            attendingStatus,
            params.guestCount || "1",
            guestNames,
            (params.events && Array.isArray(params.events)) ? params.events.join(", ") : (params.events || ""),
            params.songRequest || ""
        ];

        // Helper function to append to a specific sheet
        var appendToSheet = function (sheetName, data) {
            var sheet = doc.getSheetByName(sheetName);
            if (!sheet) {
                sheet = doc.insertSheet(sheetName);
            }
            if (sheet.getLastRow() === 0) {
                var headers = [
                    "Timestamp",
                    "Name",
                    "Phone",
                    "Attending",
                    "Guest Count",
                    "Guest Names",
                    "Events",
                    "Song Request"
                ];
                sheet.appendRow(headers);
            }
            sheet.appendRow(data);
        };

        // 1. Write to Main "RSVP" Sheet
        appendToSheet(SHEET_NAME_ALL, rowData);

        // 2. Write to Specific "Attending" or "Not Attending" Sheet
        appendToSheet(targetSheetName, rowData);

        return ContentService
            .createTextOutput(JSON.stringify({ "result": "success", "row": "added" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ "result": "error", "error": e }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}
