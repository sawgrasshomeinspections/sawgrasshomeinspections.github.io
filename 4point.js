"use strict";

/**
 * 4 Point PDF – HTML form filler
 * -------------------------------------
 * FIELD_MAP maps the id of each <input>/<select> element in the HTML form
 * to its corresponding field name inside the PDF template. For keys whose value
 * is an array, the HTML value will be written to every field in that array.
 **/
const FIELD_MAP = {
    insuredName: "Text-eu88JHZNU9",
    policyNumber: "Text-xMlCBm_wKo",
    addressInspected: "Text-e492bkFyY7",
    yearBuilt: "Text-T2IpaSPspa",
    dateInspected: "Date-GyPP7R04qV",
    dateToday: "Date-3tsTHIJNwx",
    mainPanelBreaker: "CheckBox-SWcpGt1kaE",
    mainPanelFuse: "CheckBox-jPOr-CYuO6",
    mainTotalAmps: "Text-5_NyKS9PQC",
    mainAmpsYes: "CheckBox-aeGFigIrqH",
    mainAmpsNo: "CheckBox-DtcT1A6ppC",
    mainAmpsExplain: "Text-8tsLg0IYWs",
    secondPanelBreaker: "CheckBox-XxF8EkyBdR",
    secondPanelFuse: "CheckBox-OJ5WkN4JAr",
    secondTotalAmps: "Text-rWKaxvbxHg",
    secondAmpsYes: "CheckBox-pNj2hPG1wg",
    secondAmpsNo: "CheckBox-vGhSVJTyD_",
    secondAmpsExplain: "Text-HDRHeDIGUa",
    clothWiring: "CheckBox-BXYrmNVQfo",
    knobTube: "CheckBox-XVriwN4fso",
    branchCircuitAL: "CheckBox-b_9eq0bxBZ",
    branchCircuitALExplain: "Paragraph-ptbuUQz6i_",
    copalumCrimp: "CheckBox-7-BaLvPB2e",
    alumiConn: "CheckBox-OIWT17b2yl",
    blowingFuses: "CheckBox-QMBBVkuPJH",
    trippingBreakers: "CheckBox-t-9QFknj5J",
    emptySockets: "CheckBox-Ks-5pfkDX3",
    looseWiring: "CheckBox-2qYm9B42At",
    improperGrounding: "CheckBox-PX6VcSvla7",
    corrosion: "CheckBox-lokazeFGiy",
    overFusing: "CheckBox-8R4YtBMLYo",
    doubleTaps: "CheckBox-xytSGn26gL",
    exposedWiring: "CheckBox-Lvo8vPapa_",
    unsafeWiring: "CheckBox-tkLY8EXrjh",
    improperBreakerSize: "CheckBox-jkEFBmvWbH",
    scorching: "CheckBox-3xCtsMf3DJ",
    otherHazard: "CheckBox-tOJa_94Xrw",
    otherHazardExplain: "Paragraph-1hfsIfmQWS",
    elecSatisfactory: "CheckBox-VbC6YaAFKg",
    elecUnsatisfactory: "CheckBox-qW_z5dLZFy",
    elecConditionExplain: "Paragraph-8kmyfR8_eq",
    mainPanelAge: "Text-B6SFD_0zEk",
    mainPanelUpdated: "Text-lDvlHf-xde",
    mainPanelBrand: "Text-suyWjfmOfh",
    secondPanelAge: "Text--J3bM1GuK3",
    secondPanelUpdated: "Text-KHukn_bpzj",
    secondPanelBrand: "Text-Rt5B7QhT2p",
    copper: "CheckBox-I149ZGvMZZ",
    singleStrandAl: "CheckBox--ukwPDLPkq",
    multistrandAl: "CheckBox-Q_lcN4qars",
    copperCladAl: "CheckBox-4MdSNJj0A7",
    clothKnobTube: "CheckBox-Ss_SQqJ-Jt",
    clothJacketRubber: "CheckBox-iRSZo2zytB",
    nmBxConduit: "CheckBox-MBOJNjEH7B",
    otherWiring: "CheckBox-j_Dxcv31el",
    otherWiringText: "Text-b3dJDtpa33",
    centralACYes: "CheckBox-s44a4qSSZ5",
    centralACNo: "CheckBox-16zKJw2b_h",
    centralHeatYes: "CheckBox-7AAkTGR3tm",
    centralHeatNo: "CheckBox-Z67b2DcJSJ",
    primaryHeatSource: "Text-tdejrwSbLu",
    hvacOKYes: "CheckBox-qG29unLVgD",
    hvacOKNo: "CheckBox-4G7rqRhpMq",
    hvacExplain: "Paragraph-0222b6wfRv",
    lastHVACService: "Text-Lc32uIoQyg",
    stovePresentYes: "CheckBox-8oF1Nq5hxT",
    stovePresentNo: "CheckBox-4hdh_mP2P_",
    stoveInstalledYes: "CheckBox-4HCZDsXX3Q",
    stoveInstalledNo: "CheckBox-3rbEW5lx44",
    spaceHeaterYes: "CheckBox-TUuAIECyzX",
    spaceHeaterNo: "CheckBox-oOzBViK54j",
    heaterPortableYes: "CheckBox-dy847-lgvs",
    heaterPortableNo: "CheckBox-pZ1MJYm9hI",
    condensateYes: "CheckBox-fi1U4Q3jZe",
    condensateNo: "CheckBox--YG0Q1Y2xn",
    hvacAge: "Text-is7YNn4sFE",
    hvacUpdated: "Text-1DA3GV3shR",
    tprYes: "CheckBox-UGOHF_3pTs",
    tprNo: "CheckBox-ctVv4xOIIb",
    activeLeakYes: "CheckBox-EAKHKWzV4N",
    activeLeakNo: "CheckBox-iNiWRC2kYx",
    priorLeakYes: "CheckBox-j1-4xSHu4Y",
    priorLeakNo: "CheckBox-MCjjKVKhev",
    waterHeaterLocation: "Text-jmP_3mbK02",
    dishwasherSatisfactory: "CheckBox-Y7CkRhU6yE",
    dishwasherUnsatisfactory: "CheckBox-PXBh_o7pt9",
    dishwasherNa: "CheckBox-9ltcnT4xTX",
    refrigeratorSatisfactory: "CheckBox-_M0cRGU5uH",
    refrigeratorUnsatisfactory: "CheckBox-ssyIQGxN7H",
    refrigeratorNa: "CheckBox-qRH2cXRL9O",
    washingmachineSatisfactory: "CheckBox-8KxKpdOdra",
    washingmachineUnsatisfactory: "CheckBox--1bFZX6pzv",
    washingmachineNa: "CheckBox-3Hmwe0imbw",
    waterheaterSatisfactory: "CheckBox-n1zdBARELY",
    waterheaterUnsatisfactory: "CheckBox-Kl_nS4dyPb",
    waterheaterNa: "CheckBox-bbH9J6qpcx",
    showerstubsSatisfactory: "CheckBox-jdKZC1mpS1",
    showerstubsUnsatisfactory: "CheckBox-vDtROxlrsH",
    showerstubsNa: "CheckBox-ImcpVHYyp5",
    toiletsSatisfactory: "CheckBox-Qo5eMs1YX8",
    toiletsUnsatisfactory: "CheckBox-u1EYmZzv-r",
    toiletsNa: "CheckBox-zNIAMrtX1f",
    sinksSatisfactory: "CheckBox-jF2VIj7LBi",
    sinksUnsatisfactory: "CheckBox-imJdb3YHnE",
    sinksNa: "CheckBox-Gd-TtMnmEb",
    sumppumpSatisfactory: "CheckBox-6stludpA_2",
    sumppumpUnsatisfactory: "CheckBox-7Pd7hIVd1F",
    sumppumpNa: "CheckBox-sdxaasNEEr",
    mainshutoffvalveSatisfactory: "CheckBox-JqLlLK80_P",
    mainshutoffvalveUnsatisfactory: "CheckBox-I3iT6-SlqX",
    mainshutoffvalveNa: "CheckBox-uIY2oLo5EI",
    allothervisibleSatisfactory: "CheckBox-41zS8r70Qf",
    allothervisibleUnsatisfactory: "CheckBox-tw_wk28Zfy",
    allothervisibleNa: "CheckBox-3XxhknYvna",
    plumbingUnsatDetails: "Paragraph-x3eNOKkyY1",
    supplyOriginal: "Text-NwAAuZoZV5",
    supplyComplete: "Text-73gCfKkOMT",
    supplyPartial: "Text-NnsHIskxzS",
    drainOriginal: "Text-Myw7D9NmZe",
    drainComplete: "Text-GP9EftGW1X",
    drainPartial: "Text-0WqtPJfXdO",
    waterHeaterAge: "Text-qtVFXP1tHe",
    waterHeaterComments: "Text1",
    pipeCopper: "CheckBox-m8CXh7fdl3",
    pipePVC: "CheckBox-7qLHrDNOoD",
    pipeGalvanized: "CheckBox-rd7dyIS3wk",
    pipeCast: "CheckBox-QebvbPyT-i",
    pipePoly: "CheckBox-aqx7_PsG4m",
    pipeABS: "CheckBox-kmVGwhG3-V",
    pipePEX: "CheckBox-jqccMh8ayR",
    pipePEXYear: "Text-DLqmkFq5LQ",
    pipeOther: "CheckBox-ZSN6Jl-nWs",
    pipeOtherTextarea: "Paragraph-VpChMNs4Ms",
    predRoofMaterial: "Text-lcyFvED3AC",
    predRoofAge: "Text-Sz5rRZYzBd",
    predRoofLife: "Text-mJ6ZnMw5DO",
    predLastPermit: "Text-coJWmo8g0X",
    predLastUpdate: "Text--_TbRSgSKC",
    predFullReplace: "CheckBox-UO0tk70p38",
    predPartialReplace: "CheckBox-mNVqOmFjKj",
    predPercentReplace: "Text-iY57sUEwII",
    predConditionSat: "CheckBox-UJ8011bqyg",
    predConditionUnsat: "CheckBox-Lo9dcj4_tY",
    predCracking: "CheckBox-59T5gwYXHn",
    predCupping: "CheckBox-dtT6bOLulc",
    predGranuleLoss: "CheckBox-LkNC9B2nlC",
    predExposedAsphalt: "CheckBox-nYNGeI5Aiv",
    predExposedFelt: "CheckBox-5ZzgoOasje",
    predMissingTabs: "CheckBox-gX7hUYgE9i",
    predSoftSpots: "CheckBox-zeD5IKR7vO",
    predHail: "CheckBox-hgrZAy3zlu",
    predLeakYes: "CheckBox--aeqFwVojc",
    predLeakNo: "CheckBox-vMp1l59Xqt",
    predAtticYes: "CheckBox-D2ZoS77a4i",
    predAtticNo: "CheckBox-NoDhs_cZWX",
    predInteriorYes: "CheckBox-2bzPj5M-VW",
    predInteriorNo: "CheckBox-OXlRZE1QXl",
    secRoofMaterial: "Text-pFYBg5reox",
    secRoofAge: "Text-IFQCwMLGxr",
    secRoofLife: "Text-gbqZ28wkEL",
    secLastPermit: "Text-JohVlIlx-B",
    secLastUpdate: "Text-4vJie-j2my",
    secFullReplace: "CheckBox-nFtoBmsA_e",
    secPartialReplace: "CheckBox-G1WJfOOsdh",
    secPercentReplace: "Text--JFU9OBHxA",
    secConditionSat: "CheckBox-Q0MfzIs_wY",
    secConditionUnsat: "CheckBox-QflzyAzBL8",
    secCracking: "CheckBox-Z5Fa_BHEBB",
    secCupping: "CheckBox-4ywWcLNUzg",
    secGranuleLoss: "CheckBox-8e1Nsbs4tu",
    secExposedAsphalt: "CheckBox-A51AIo2bkw",
    secExposedFelt: "CheckBox-qmzH73hrrd",
    secMissingTabs: "CheckBox-mq5avUDLB3",
    secSoftSpots: "CheckBox-W7VLj0qYxc",
    secHail: "CheckBox-ILetCx0PqL",
    secLeakYes: "CheckBox-ZPLXOxYL0c",
    secLeakNo: "CheckBox-A-cUApSq8d",
    secAtticYes: "CheckBox-j1gkpxFIFP",
    secAtticNo: "CheckBox-z6T0IVnmrx",
    secInteriorYes: "CheckBox-8rfsQinsci",
    secInteriorNo: "CheckBox-95CVvT_3iB",
    additionalComments: "Paragraph-bXb5JYoN1X"
}

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
});

const WIND_MITIGATION_PDF_NAME = "4 Point Inspection Form.pdf";

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
async function fillWindMitigation() {
    const templateBytes = await fetchPdf(WIND_MITIGATION_PDF_NAME);
    const pdfDoc = await PDFLib.PDFDocument.load(templateBytes);
    const form = pdfDoc.getForm();

    // Helper to write either a checkbox/radio state or plain text
    const writeValue = (name, val) => {
        const field = form.getFieldMaybe(name);
        var isCheckbox;

        try {
            isCheckbox = typeof field.check === 'function';
        } catch (e) {
            isCheckbox = false;
        }

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

    const newForm = pdfDoc.getForm();
    newForm.flatten();

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
    const elements = document.querySelectorAll('#dateToday')

    elements.forEach((e) => {
        e.valueAsDate = new Date()
    });
});

// Download button handler – generates the filled PDF and triggers the download
document.querySelector('#download-pdf').addEventListener('click', async (e) => {
    e.preventDefault();

    try {
        const filledBytes = await fillWindMitigation();

        const blob = new Blob([filledBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const insuredName = document.querySelector('#insuredName').textContent || "Unknown";

        const a = Object.assign(document.createElement('a'), {
            href: url,
            download: `${insuredName} 4 Point Inspection.pdf`,
        });

        a.click();
        URL.revokeObjectURL(url);
    } catch (err) {
        console.error('PDF generation failed:', err);
        alert('Something went wrong while creating the PDF. Please try again.');
    }
});

