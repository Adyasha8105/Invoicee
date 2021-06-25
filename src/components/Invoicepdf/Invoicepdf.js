import jsPDF from "jspdf";

export default function Invoicepdf() {	
    var doc =  new jsPDF('p','pt')
    doc.text(20,20,'This is default text')
    doc.setFont('courier')
    doc.text(20,30,'this is text with courier font')

    doc.save("generated.pdf")
}
