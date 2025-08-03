"use strict";

/**
 * Wind Mitigation PDF – HTML form filler
 * -------------------------------------
 * FIELD_MAP maps the id of each <input>/<select> element in the HTML form
 * to its corresponding field name inside the PDF template. For keys whose value
 * is an array, the HTML value will be written to every field in that array.
 **/
const FIELD_MAP = {
    date: "Date",

    inspectorInitials: [
        "Inspectors Initials",
        "Inspectors Initials_2",
        "Inspectors Initials_3",
        "Inspectors Initials_4",
    ],

    ownerAddress: [
        "For Address",
        "Address",
        "Property Address",
        "Property Address_2",
        "Property Address_3",
        "Property Address_4",
    ],

    inspectionDate: "Inspection Date",

    ownerName: [
        "Owner Name",
        "Prepared for",
        "Contact Person"
    ],

    email: "Email",
    ownerCity: "City",
    ownerZip: "Zip",
    ownerCounty: "County",
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
    inspectorSignatureDate: ["Date", "Inspection Date"],
    homeOwnerSignatureDate: "Date_2",
};

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "GMT",
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

// Get the image's EXIF orientation
// https://github.com/Hopding/pdf-lib/issues/1284
// https://stackoverflow.com/a/32490603
// Returns either the image orientation or -1 if none found
function getImageOrientation(file) {
    const view = new DataView(file);

    const length = view.byteLength;
    let offset = 2;

    while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) return -1;
        const marker = view.getUint16(offset, false);
        offset += 2;

        // If EXIF buffer segment exists find the orientation
        if (marker == 0xffe1) {
            if (view.getUint32((offset += 2), false) != 0x45786966) {
                return -1;
            }

            const little = view.getUint16((offset += 6), false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            const tags = view.getUint16(offset, little);
            offset += 2;
            for (let i = 0; i < tags; i++) {
                if (view.getUint16(offset + i * 12, little) == 0x0112) {
                    return view.getUint16(offset + i * 12 + 8, little);
                }
            }
        } else if ((marker & 0xff00) != 0xff00) {
            break;
        } else {
            offset += view.getUint16(offset, false);
        }
    }
    return -1;
}

// Get rotation in degrees from EXIF orientation
// https://sirv.com/help/articles/rotate-photos-to-be-upright/#exif-orientation-values
// x-mirrored: the image is flipped horizontallly
// y-mirrored: the image is flipped vertically
function getOrientationCorrection(orientation) {
    switch (orientation) {
        case 2:
            return 0;
        case 3:
            return -180;
        case 4:
            return 180;
        case 5:
            return 90;
        case 6:
            return -90;
        case 7:
            return -90;
        case 8:
            return 90;
        default:
            return 0;
    }
}
// Fills the PDF using current HTML-form values and returns a Uint8Array
async function fill4Point() {
    const templateBytes = await fetchPdf(WIND_MITIGATION_PDF_NAME);
    const pdfDoc = await PDFLib.PDFDocument.load(templateBytes);
    const form = pdfDoc.getForm();

    // Helper to write either a checkbox/radio state or plain text
    const writeValue = (name, val) => {
        console.log(typeof (name), typeof (val));
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

    await drawImages(pdfDoc);

    // TODO: Fix corrupted PDF forms
    //const newForm = pdfDoc.getForm();
    //newForm.flatten();

    return pdfDoc.save();
}

async function drawImages(pdfDoc) {
    const files = document.getElementById('imageUpload')?.files;

    if (!files || files.length == 0) {
        return
    }
    // Use size of first template page for consistency
    const { width, height } = pdfDoc.getPage(0).getSize();
    const margin = 20;
    const imgWidth = (width - margin * 3) / 2;
    const imgHeight = (height - margin * 3) / 2;

    for (let i = 0; i < files.length; i += 4) {
        const page = pdfDoc.addPage([width, height]);

        for (let j = 0; j < 4 && i + j < files.length; j++) {
            const file = files[i + j];
            const imageBytes = await file.arrayBuffer();

            let image;
            try {
                image = file.type === 'image/png'
                    ? await pdfDoc.embedPng(imageBytes)
                    : await pdfDoc.embedJpg(imageBytes);
            } catch (err) {
                alert(`Failed to embed image (Click 'OK' to skip this image)\n${err}`);
                continue;
            }

            // Determine orientation from EXIF
            const exifOrientation = await getImageOrientation(imageBytes);
            const rotationDegrees = await getOrientationCorrection(exifOrientation);

            // Compute grid cell
            const col = j % 2;
            const row = Math.floor(j / 2);

            const xMargin = margin + col * (imgWidth + margin);
            const yOffset = height - margin - row * (imgHeight + margin);

            // Swap dimensions for rotated image
            const correctedWidth = (rotationDegrees === 90 || rotationDegrees === -90) ? imgHeight : imgWidth;
            const correctedHeight = (rotationDegrees === 90 || rotationDegrees === -90) ? imgWidth : imgHeight;

            let xShift, yShift;

            switch (exifOrientation) {
                case 2:
                    xShift = pageWidth - xMargin - correctedWidth;
                    yShift = yOffset - correctedHeight;
                    break;
                case 3:
                    xShift = xMargin + correctedWidth;
                    yShift = yOffset;
                    break;
                case 4:
                    xShift = pageWidth - xMargin;
                    yShift = yOffset;
                    break;
                case 5:
                    xShift = xMargin + correctedWidth;
                    yShift = pageHeight - yOffset;
                    break;
                case 6:
                    xShift = xMargin;
                    yShift = yOffset;
                    break;
                case 7:
                    xShift = xMargin;
                    yShift = pageHeight - yOffset + correctedHeight;
                    break;
                case 8:
                    xShift = xMargin + correctedWidth;
                    yShift = yOffset - correctedHeight;
                    break;
                default: // orientation 1 or unknown
                    xShift = xMargin;
                    yShift = yOffset - correctedHeight;
            }

            page.drawImage(image, {
                x: xShift,
                y: yShift,
                width: correctedWidth,
                height: correctedHeight,
                rotate: PDFLib.degrees(rotationDegrees),
            });
        }

    }
}

addEventListener("load", () => {
    const elements = document.querySelectorAll('#date, #inspectorSignatureDate')

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Shitty timezone conversion magic in play here

    elements.forEach((e) => {
        e.valueAsDate = today;
    });
});

// Download button handler – generates the filled PDF and triggers the download
document.querySelector('#download-pdf').addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        const filledBytes = await fill4Point();

        const blob = new Blob([filledBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const ownerName = document.querySelector('#ownerName').value || "Unknown";

        const a = Object.assign(document.createElement('a'), {
            href: url,
            download: `${ownerName} Wind Mitigation.pdf`,
        });

        a.click();
        URL.revokeObjectURL(url);
    } catch (err) {
        console.error('PDF generation failed:', err);
        alert('Something went wrong while creating the PDF. Please try again.');
    }
});

