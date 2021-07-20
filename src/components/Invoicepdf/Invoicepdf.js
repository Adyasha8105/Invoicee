import jsPDF from "jspdf";
import "jspdf-autotable";

export default function Invoicepdf(data, download) {
  var doc = new jsPDF();

  generateHeader(doc, data);

  window.open(doc.output("bloburl"));
  if (download === true) {
    doc.save("generated.pdf");
  }
}

// function to generate header part of the invoice
function generateHeader(doc, data) {
  var title = data.title;
  var imageData = data.logo;

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

  var x_pos = 15;
  var y_pos = 20;

  doc.setFontSize(25);
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(0, 0, 0);

  if (title) {
    doc.text(15, y_pos, title);
  }

  if (imageData) {
    doc.addImage(imageData, "PNG", 160, y_pos - 10, 20, 20);
    y_pos += 10;
  }

  doc.setFontSize(15);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(65, 160, 240);

  y_pos += 15;
  if (company) {
    doc.text(x_pos, y_pos, company);
  }

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  doc.setFont("helvetica", "normal");

  y_pos += 6;
  if (senderName) {
    doc.text(x_pos, y_pos, senderName);
  }

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

  if (y_pos > 35) y_pos = 45;
  else y_pos = 35;

  x_pos = 120;

  doc.setFontSize(15);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(65, 160, 240);

  if (recipientCompany) {
    doc.text(x_pos, y_pos, recipientCompany);
  }

  doc.setFontSize(13);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);

  if (recipientName) {
    y_pos += 6;
    doc.text(x_pos, y_pos, recipientName);
  }

  if (recipientEmail) {
    y_pos += 6;
    doc.text(x_pos, y_pos, recipientEmail);
  }

  if (recipientAddress) {
    y_pos += 6;
    doc.text(x_pos, y_pos, recipientAddress);
  }

  if (recipientCountry) {
    y_pos += 6;
    doc.text(x_pos, y_pos, recipientCountry);
  }

  if (recipientPhone) {
    y_pos += 6;
    doc.text(x_pos, y_pos, "Phone : " + recipientPhone);
  }

  if (recipientTaxReg) {
    y_pos += 6;
    doc.text(x_pos, y_pos, "Tax Regd. No. : " + recipientTaxReg);
  }

  if (recipientOthers) {
    y_pos += 6;
    doc.text(x_pos, y_pos, recipientOthers);
  }

  // line to mark the end of header
  // y_pos += 6;
  // doc.line(10, y_pos, 200, y_pos);

  generateInvoice(doc, data, y_pos);
}

// function to generate lower part of the invoice
function generateInvoice(doc, data, y_pos) {
  doc.setFontSize(10);
  doc.setTextColor(65, 160, 240);
  doc.setFont("helvetica", "normal");

  // doc.text(85, 70, "BILL RECEIPT");

  doc.setTextColor(0, 0, 0);

  var invoiceNo = data.details.invoiceNo;
  var invoiceDate = data.details.invoiceDate;
  var invoiceDueDate = data.details.invoiceDueDate;

  var x_pos = 15;

  if (invoiceNo) {
    y_pos += 10;
    doc.text(x_pos, y_pos, "Invoice No. : " + invoiceNo);
  }

  if (invoiceDate) {
    x_pos += 70;
    doc.text(x_pos, y_pos, "Date : " + invoiceDate);
  }

  if (invoiceDueDate) {
    x_pos += 65;
    doc.text(x_pos, y_pos, "Invoice Due Date : " + invoiceDueDate);
  }

  generatePurchaseList(doc, data, y_pos);
}

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

function generatePurchaseList(doc, data, y_pos) {
  var purchaseList = data.billItems;
  var summary = data.summary;
  var discount = data.summary.discount;
  var vat = data.summary.vat;
  var subtotal = data.summary.subtotal;

  //if (purchaseList.length < 1) {
  //  return;
  //}

  var items = [];
  var gapHeight = purchaseList.length;
  for (var i = 0; i < purchaseList.length; i++) {
    var item = purchaseList[i];
    items.push([
      item.itemName,
      item.quantity,
      item.rate + " (+" + financial(item.quantity * item.rate) + ")",
      item.tax +
        "% (+" +
        financial((item.tax / 100.0) * (item.quantity * item.rate)) +
        ")",
      financial(item.subtotal),
    ]);
    if (item.others) {
      items.push([item.others]);
      gapHeight++;
    }
  }

  y_pos += 15;

  doc.autoTable({
    startY: y_pos,
    halign: "center",
    head: [["Name", "Qty", "Cost", "Tax(in %)", "Total"]],
    body: items,
  });

  y_pos += gapHeight * 15 + 15;

  doc.autoTable({
    startY: y_pos,
    halign: "right",
    body: [
      ["Subtotal", summary.subtotal],
      ["Tax", summary.tax],
      [
        `Discount (${discount}%)`,
        (discount * 0.01 * Number(subtotal)).toFixed(2),
      ],
      [`VAT (${vat}%)`, (vat * 0.01 * Number(subtotal)).toFixed(2)],
      [
        "total",
        (
          Number(subtotal) +
          Number(summary.tax) +
          Number(vat) * 0.01 * Number(subtotal) -
          Number(discount) * 0.01 * Number(subtotal)
        ).toFixed(2),
      ],
    ],
  });

  // additional notes
  if (data.additional) {
    y_pos += 85;
    doc.text(15, y_pos, data.additional);
  }
}
