function doGet(e) {
  var x = HtmlService.createTemplateFromFile("Index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function getData() {
  return SpreadsheetApp
      .openById('1xECyfqagZCWH6VOL_CV-ACq85o4P2qPk-FyC2K9NURc')
      .getSheetByName('Sheet1')
      //.getActiveSheet()
      .getDataRange()
      .getValues();
}
