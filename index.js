"use strict";

/**
 * Wind Mitigation PDF – HTML form filler
 * -------------------------------------
 * FIELD_MAP maps the id of each <input>/<select> element in the HTML form
 * to its corresponding field name inside the PDF template. For keys whose value
 * is an array, the HTML value will be written to every field in that array.
 **/
const FIELD_MAP = {
    preparedFor: "Prepared for",
    forAddress: "For Address",
    date: "Date",

    inspectorInitials: [
        "Inspectors Initials",
        "Inspectors Initials_2",
        "Inspectors Initials_3",
        "Inspectors Initials_4",
    ],

    propertyAddress: [
        "Property Address",
        "Property Address_2",
        "Property Address_3",
        "Property Address_4",
    ],

    inspectionDate: "Inspection Date",
    ownerName: "Owner Name",
    email: "Email",
    contactPerson: "Contact Person",
    ownerAddress: "Address",
    ownerCity: "City",
    ownerZip: "Zip",
    ownerCounty: "County",
    homePhone: "Home Phone",
    workPhone: "Work Phone",
    cellPhone: "Cell Phone",
    ownerInsurance: "Insurance Company",
    ownerPolicy: "Policy",
    homeYearBuilt: "Year of Home",
    homeStories: " of Stories",

    // Building code selections
    buildingCodeA: "Check Box13",
    buildingCodeB: "Check Box16",
    buildingCodeC: "Check Box17",

    // Permit / Year‑built
    permitDateA: "Text4",
    yearBuiltA: "A Built in compliance with the FBC Year Built",
    permitDateB: "Text3",
    yearBuiltB: "B For the HVHZ Only Built in compliance with the SFBC94 Year Built",

    // Roof covering types …
    shingle: "Button7",
    permitDateShingle: "Fiberglass date",
    approvalShingle: "1",
    installationShingle: "1_2",
    noInformationShingle: "Check Box79",

    tile: "Button1",
    permitDateTile: "clay date",
    approvalTile: "2",
    installationTile: "2_2",
    noInformationTile: "Check Box78",

    metal: "Button2",
    permitDateMetal: "metal date",
    approvalMetal: "3",
    installationMetal: "3_2",
    noInformationMetal: "Check Box77",

    builtUp: "Button3",
    permitDateBuiltUp: "built up date",
    approvalBuiltUp: "4",
    installationBuiltUp: "4_2",
    noInformationBuiltUp: "Check Box76",

    membrane: "Button4",
    permitDateMembrane: "membrane datew",
    approvalMembrane: "5",
    installationMembrane: "5_2",
    noInformationMembrane: "Check Box75",

    other: "Button5",
    typeOther: "undefined_9",
    permitDateOther: "other date",
    approvalOther: "6",
    installationOther: "6_2",
    noInformationOther: "Check Box74",

    // Roof deck attachment checkboxes …
    optionA: "Check Box18",
    optionB: "Check Box19",
    optionC: "Check Box20",
    optionD: "Check Box21",

    roofDeckAttachmentOptionA: "Check Box22",
    roofDeckAttachmentOptionB: "Check Box23",
    roofDeckAttachmentOptionC: "Check Box24",
    roofDeckAttachmentOptionD: "Check Box25",
    roofDeckAttachmentOptionE: "Check Box26",
    roofDeckAttachmentOtherType: "E  Other",
    roofDeckAttachmentOptionF: "Check Box27",
    roofDeckAttachmentOptionG: "Check Box28",

    // Roof‑to‑wall connection (RTW) …
    rtwA: "Check Box29",
    rtwA1: "Check Box30",
    rtwA2: "Check Box31",
    rtwA3: "Check Box32",
    rtwA4: "Check Box33",
    rtwB: "Check Box34",
    rtwB1: "Check Box35",
    rtwB2: "Check Box36",
    rtwC: "Check Box37",
    rtwD: "Check Box38",
    rtwD1: "Check Box39",
    rtwD2: "Check Box40",
    rtwE: "Check Box41",
    rtwF: "Check Box42",
    rtwOtherType: "F  Other",
    rtwG: "Check Box43",
    rtwH: "Check Box44",

    // Roof geometry
    roofHip: "Check Box45",
    hipNonHipLength: "Total length of nonhip features",
    hipPerimeter: "feet Total roof system perimeter",
    roofFlat: "Check Box46",
    flatLowSlopeArea: "less than 212 Roof area with slope less than 212",
    flatTotalArea: "sq ft Total roof area",
    roofOther: "Check Box47",

    // Secondary water resistance
    swrA: "Check Box48",
    swrB: "Check Box49",
    swrC: "Check Box50",

    // Opening protection matrices …
    naW: "window check box.0",
    naGd: "garage check box.0",
    naSky: "skylights check box.0",
    naGb: "glass block check box.0",
    naEd: "entry doors check box.0",
    naNgd: "garage doors check box.0",

    aW: "window check box.1",
    aGd: "garage check box.1",
    aSky: "skylights check box.1",
    aGb: "glass block check box.1",
    aEd: "entry doors check box.1",
    aNgd: "garage doors check box.1",

    bW: "window check box.2",
    bGd: "garage check box.2",
    bSky: "skylights check box.2",
    bGb: "glass block check box.2",
    bEd: "entry doors check box.2",
    bNgd: "garage doors check box.2",

    cW: "window check box.3",
    cGd: "garage check box.3",
    cSky: "skylights check box.3",
    cGb: "glass block check box.3",
    cEd: "entry doors check box.3",
    cNgd: "garage doors check box.3",

    dW: "window check box.4",
    dGd: "garage check box.4",
    dSky: "skylights check box.4",
    dGb: "glass block check box.4",
    dEd: "entry doors check box.4",
    dNgd: "garage doors check box.4",

    nW1: "window check box.5",
    nGd1: "garage check box.5",
    nSky1: "skylights check box.5",
    nGb1: "glass block check box.5",
    nEd1: "entry doors check box.5",
    nNgd1: "garage doors check box.5",

    nW2: "window check box.6",
    nGd2: "garage check box.6",
    nSky2: "skylights check box.6",
    nGb2: "glass block check box.6",
    nEd2: "entry doors check box.6",
    nNgd2: "garage doors check box.6",

    xW: "window check box.7",
    xGd: "garage check box.7",
    xSky: "skylights check box.7",
    xGb: "glass block check box.7",
    xEd: "entry doors check box.7",
    xNgd: "garage doors check box.7",

    openProtA: "Check Box51",
    openProtA1: "Check Box52",
    openProtA2: "Check Box53",
    openProtA3: "Check Box54",
    openProtB: "Check Box55",
    openProtB1: "Check Box56",
    openProtB2: "Check Box57",
    openProtB3: "Check Box58",
    openProtC: "Check Box59",
    openProtC1: "Check Box60",
    openProtC2: "Check Box61",
    openProtC3: "Check Box62",
    openProtN: "Check Box63",
    openProtN1: "Check Box64",
    openProtN2: "Check Box65",
    openProtN3: "Check Box66",
    openProtX: "Check Box67",

    // Signatures
    employeeInspector: "contractors and professional engineers only I had my employee",
    inspectorSignatureDate: "Date",
    homeOwnerSignatureDate: "Date_2",
};

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
});

const WIND_MITIGATION_PDF_NAME = "SW Wind Mitigation.pdf";

/**
 * Returns the logical value for a given HTML input element.
 */
const getElementValue = element => {
    if (!element) return "";

    switch (element.type) {
        case "checkbox":
        case "radio":
            return element.checked;

        case "date":
            return element.value ? DATE_FORMATTER.format(element.valueAsDate) : "";

        default:
            return element.value?.trim() ?? "";
    }
};

async function fetchPdf(url) {
    const res = await fetch(url);
    return new Uint8Array(await res.arrayBuffer());
}

// Fills the PDF using current HTML-form values and returns a Uint8Array
async function fillWindMitigation() {
    const templateBytes = await fetchPdf(WIND_MITIGATION_PDF_NAME);
    const pdfDoc = await PDFLib.PDFDocument.load(templateBytes);
    const form = pdfDoc.getForm();

    // Helper to write either a checkbox/radio state or plain text
    const writeValue = (name, val) => {
        const field = form.getFieldMaybe(name);
        const isCheckbox = typeof field.check === 'function';

        if (isCheckbox) {
            val ? field.check() : field.uncheck();
        } else {
            field.setText(String(val));
        }
    };

    for (const [htmlId, pdfName] of Object.entries(FIELD_MAP)) {
        const element = document.getElementById(htmlId);
        const value = getElementValue(element);

        if (!value || value === null) continue;

        if (Array.isArray(pdfName)) {
            pdfName.forEach(name => writeValue(name, value));
        } else {
            writeValue(pdfName, value);
        }
    }
    // 2. Now it’s safe to flatten
    //form.flatten({ updateFieldAppearances: true });
    const files = document.getElementById('imageUpload')?.files;
    if (files && files.length) {
        // Use size of first template page for consistency
        const { width, height } = pdfDoc.getPage(0).getSize();
        const margin = 20;
        const imgWidth = (width - margin * 3) / 2;
        const imgHeight = (height - margin * 3) / 2;

        for (let i = 0; i < files.length; i += 4) {
            const page = pdfDoc.addPage([width, height]);

            for (let j = 0; j < 4 && i + j < files.length; j++) {
                const file = files[i + j];
                const bytes = await file.arrayBuffer();
                let image;

                try {
                    image = file.type === 'image/png'
                        ? await pdfDoc.embedPng(bytes)
                        : await pdfDoc.embedJpg(bytes);
                } catch (err) {
                    console.error('PDF embed image failed: ', err);
                    continue;
                }

                const col = j % 2;
                const row = Math.floor(j / 2);
                const x = margin + col * (imgWidth + margin);
                const y = height - margin - imgHeight - row * (imgHeight + margin);

                page.drawImage(image, { x, y, width: imgWidth, height: imgHeight });
            }
        }
    }

    return pdfDoc.save();
}


// Download button handler – generates the filled PDF and triggers the download
document.querySelector('#download-pdf').addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        const filledBytes = await fillWindMitigation();

        const blob = new Blob([filledBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const a = Object.assign(document.createElement('a'), {
            href: url,
            download: 'wind-mitigation-filled.pdf',
        });

        a.click();
        URL.revokeObjectURL(url);
    } catch (err) {
        console.error('PDF generation failed:', err);
        alert('Something went wrong while creating the PDF. Please try again.');
    }
});
