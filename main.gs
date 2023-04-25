function onEdit(e) {
  var sheetName = e.source.getActiveSheet().getSheetName();
  var editedColumn = e.range.columnEnd;
  var targetColumn = 36;
  var editedValue = e.value;
  var targetValue = 1;
  Logger.log(JSON.stringify(e));
  Logger.log("Ready to go");
  Logger.log(sheetName);
  // Check if the edited cell is in the target column and has changed from 0 to 1
  if (sheetName == 'MasterList' && e.oldValue === "0.0" && editedValue == targetValue && editedColumn == targetColumn) {
    // Get the row of the edited cell
    var editedRow = e.range.rowEnd;
    Logger.log("Got row");

    // Get the source spreadsheet and target sheet
    var sourceSheet = e.source.getActiveSheet();
    var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Tech Checks to be scheduled");
    Logger.log("Got Check Sheet");

    // Get the range of the edited row in the source sheet
    var range = sourceSheet.getRange(editedRow, 1, 1, sourceSheet.getLastColumn());
    Logger.log("Got range");

    // Get the values of the edited row
    var values = range.getValues()[0];
    Logger.log("Got values");
    Logger.log(JSON.stringify(range.getValues()));

    // Append the row to the target sheet
    targetSheet.appendRow(values);
    Logger.log("Appended row");
  }
}
