import jsPDF from "jspdf";

export default function Invoicepdf(data) {
  var doc = new jsPDF();

  generateHeader(doc, data);
  generateInvoice(doc, data);

  window.open(doc.output("bloburl"));
  // doc.save("generated.pdf")
}

// function to generate header part of the invoice
function generateHeader(doc, data) {
  var logo = data.logo;

  // var element = document.createElement("div");
  // element.innerHTML = logo;

  // var imageFormat = logo.substring(
  //   '<img src="data:image/'.length,
  //   logo.search(";base64")
  // );
  // doc.addImage(
  //   element.firstChild,
  //   imageFormat,
  //   15,
  //   10,
  //   35,
  //   35,
  //   "company_logo",
  //   "NONE",
  //   0
  // );
  // x_pos += 40;

  var img = new Image();
  img.src = logo;

  doc.addImage(img, "PNG", 10, 15);

  // sender details
  var company = data.sender.desgination;
  var senderName = data.sender.name;
  var senderEmail = data.sender.email;
  var senderAddress = data.sender.address;
  var senderCountry = data.sender.country;
  var senderPhone = data.sender.phone;
  var senderTaxReg = data.sender.tax_regd_no;
  var senderOthers = data.sender.others;

  // recipient details
  var recipientName = data.recipient.name;
  var recipientCompany = data.recipient.designation;
  var recipientEmail = data.recipient.email;
  var recipientAddress = data.recipient.address;
  var recipientCountry = data.recipient.country;
  var recipientPhone = data.recipient.phone;
  var recipientTaxReg = data.recipient.tax_regd_no;
  var recipientOthers = data.recipient.others;

  var x_pos = 45;
  var y_pos = 40;

  doc.setFontSize(15);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(65, 160, 240);

  y_pos += 7;
  doc.text(x_pos, y_pos, company);

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.setFont("helvetica", "normal");

  y_pos += 6;
  doc.text(x_pos, y_pos, senderName);

  // add only entered details into pdf
  if (senderEmail) {
    y_pos += 6;
    doc.text(x_pos, y_pos, senderEmail);
  }

  if (senderAddress) {
    y_pos += 6;
    doc.text(x_pos, y_pos, senderAddress);
  }

  if (senderCountry) {
    y_pos += 6;
    doc.text(x_pos, y_pos, senderCountry);
  }

  if (senderPhone) {
    y_pos += 6;
    doc.text(x_pos, y_pos, "Phone : " + senderPhone);
  }

  if (senderTaxReg) {
    y_pos += 6;
    doc.text(x_pos, y_pos, "Tax Regd. No. : " + senderTaxReg);
  }

  if (senderOthers) {
    y_pos += 6;
    doc.text(x_pos, y_pos, senderOthers);
  }

  y_pos = 10;
  x_pos = 120;

  doc.setFontSize(15);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(65, 160, 240);

  if (recipientCompany) {
    y_pos += 7;
    doc.text(x_pos, y_pos, recipientCompany);
  }

  doc.setFontSize(13);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);

  if (recipientName) {
    y_pos += 5;
    doc.text(x_pos, y_pos, recipientName);
  }

  if (recipientEmail) {
    y_pos += 5;
    doc.text(x_pos, y_pos, recipientEmail);
  }

  if (recipientAddress) {
    y_pos += 5;
    doc.text(x_pos, y_pos, recipientAddress);
  }

  if (recipientCountry) {
    y_pos += 5;
    doc.text(x_pos, y_pos, recipientCountry);
  }

  if (recipientPhone) {
    y_pos += 5;
    doc.text(x_pos, y_pos, "Phone : " + recipientPhone);
  }

  if (recipientTaxReg) {
    y_pos += 5;
    doc.text(x_pos, y_pos, "Tax Regd. No. : " + recipientTaxReg);
  }

  if (recipientOthers) {
    y_pos += 5;
    doc.text(x_pos, y_pos, recipientOthers);
  }

  // line to mark the end of header
  // y_pos += 6;
  // doc.line(10, y_pos, 200, y_pos);
}

// function to generate lower part of the invoice
function generateInvoice(doc, data) {
  doc.setFontSize(15);
  doc.setTextColor(65, 160, 240);
  doc.setFont("helvetica", "bold");

  doc.text(85, 70, "BILL RECEIPT");

  doc.setTextColor(0, 0, 0);

  var invoiceNo = data.details.invoiceNo;
  var invoiceDate = data.details.invoiceDate;
  var invoiceDueDate = data.details.invoiceDueDate;

  var y_pos = 73;
  var x_pos = 15;

  if (invoiceNo) {
    y_pos += 10;
    doc.text(x_pos, y_pos, "Invoice No. : " + invoiceNo);
  }

  if (invoiceDate) {
    x_pos += 60;
    doc.text(x_pos, y_pos, "Date : " + invoiceDate);
  }

  if (invoiceDueDate) {
    x_pos += 60;
    doc.text(x_pos, y_pos, "Invoice Due Date : " + invoiceDueDate);
  }

  generatePurchaseList(doc, data);
}

function generatePurchaseList(doc, data) {}
