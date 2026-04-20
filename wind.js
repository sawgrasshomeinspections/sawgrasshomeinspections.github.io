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

  ownerAddress: [
    "ownerAddress",
    "Text Field 47",
    "Text Field 49",
    "Text Field 55",
    "Text Field 56",
    "Text Field 57",
    "Text Field 63",
  ],

  inspectionDate: "inspectionDate",

  ownerName: ["ownerName", "Prepared for", "contactPerson"],

  email: "ownerEmail",
  ownerCity: "ownerCity",
  ownerZip: "ownerZip",
  ownerCounty: "ownerCounty",
  insuranceCompany: "insuranceCompany",
  insurancePolicyNumber: "insuranceCompany",
  homeYearBuilt: "yearOfHome",
  homeStories: "Text Field 15",

  // Building code selections
  buildingCodeA: "Check Box 5",
  buildingCodeB: "Check Box 6",
  buildingCodeC: "Check Box 7",
  buildingCodeD: "Check Box 8",

  // Permit / Year‑built
  permitDateA: "Text Field 61",
  yearBuiltA: "Text Field 20",
  permitDateB: "Text Field 62",
  yearBuiltB: "Text Field 21",
  permitDateC: "Text Field 24",
  yearBuiltC: "Text Field 22",

  regionHvhz: "Check Box 10",
  regionRegion1: "Check Box 11",
  regionRegion2: "Check Box 13",
  regionRegion3: "Check Box 12",

  roofSlopeGt: "Check Box 9",
  roofSlopeLt: "Check Box 81",

  // Roof covering types …
  shingle: "Check Box 14",
  permitDateShingle: "Text Field 26",
  approvalShingle: "Text Field 33",
  installationShingle: "Text Field 40",
  noInformationShingle: "Check Box 21",

  tile: "Check Box 15",
  permitDateTile: "Text Field 27",
  approvalTile: "Text Field 34",
  installationTile: "Text Field 41",
  noInformationTile: "Check Box 22",

  // Add synthetic
  synthetic: "Check Box 16",
  permitDateSynthetic: "Text Field 28",
  approvalSynthetic: "Text Field 35",
  installationSynthetic: "Text Field 42",
  noInformationSynthetic: "Check Box 23",

  metal: "Check Box 17",
  permitDateMetal: "Text Field 29",
  approvalMetal: "Text Field 36",
  installationMetal: "Text Field 43",
  noInformationMetal: "Check Box 24",

  builtUp: "Check Box 18",
  permitDateBuiltUp: "Text Field 30",
  approvalBuiltUp: "Text Field 37",
  installationBuiltUp: "Text Field 44",
  noInformationBuiltUp: "Check Box 25",

  membrane: "Check Box 19",
  permitDateMembrane: "Text Field 31",
  approvalMembrane: "Text Field 38",
  installationMembrane: "Text Field 45",
  noInformationMembrane: "Check Box 26",

  other: "Check Box 20",
  typeOther: "Text Field 25",
  permitDateOther: "Text Field 32",
  approvalOther: "Text Field 39",
  installationOther: "Text Field 46",
  noInformationOther: "Check Box 27",

  // Product apporval listing ...
  optionA: "Check Box 28",
  optionB: "Check Box 29",
  optionC: "Check Box 30",
  optionD: "Check Box 31",

  roofDeckAttachmentOptionA: "Check Box 32",
  roofDeckAttachmentOptionB: "Check Box 33",
  roofDeckAttachmentOptionC: "Check Box 34",
  roofDeckAttachmentOptionD: "Check Box 35",
  roofDeckAttachmentOptionE: "Check Box 36",
  roofDeckAttachmentOtherType: "Check Box 37",
  roofDeckAttachmentOptionG: "Check Box 38",
  roofDeckAttachmentOptionH: "Check Box 39",

  // Roof‑to‑wall connection (RTW) …
  rtwA: "Check Box 40",
  rtwA1: "Check Box 41",
  rtwA2: "Check Box 42",
  rtwA3: "Check Box 44",
  rtwA4: "Check Box 45",
  rtwA5: "Check Box 46",
  rtwA6: "Check Box 47",

  rtwB: "Check Box 51",
  rtwB1: "Check Box 48",
  rtwB2: "Check Box 49",
  rtwB3: "Check Box 50",

  rtwC: "Check Box 52",
  rtwC1: "Check Box 53",
  rtwC2: "Check Box 54",

  rtwD: "Check Box 55",
  rtwD1: "Check Box 56",
  rtwD2: "Check Box 57",
  rtwD3: "Check Box 58",

  rtwE: "Check Box 59",

  rtwF: "Check Box 60",
  rtwOtherType: "Text Field 50",

  rtwG: "Check Box 61",

  rtwH: "Check Box 62",

  rtwI: "Check Box 63",

  // Roof geometry
  roofHip: "Check Box 64",
  hipNonHipLength: "Text Field 51",
  hipPerimeter: "Text Field 52",

  roofFlat: "Check Box 65",
  flatLowSlopeArea: "Text Field 53",
  flatTotalArea: "Text Field 54",

  roofOther: "Check Box 66",

  // Secondary water resistance
  swrA: "Check Box 67",
  swrA1: "Check Box 68",
  swrA2: "Check Box 69",
  swrA3: "Check Box 70",
  swrA4: "Check Box 71",
  swrAEntireUnderside: "Check Box 73",

  swrB: "Check Box 74",
  swrC: "Check Box 75",

  // Opening protection matrices …
  naW: "Check Box 104",
  naGd: "Check Box 106",
  naSky: "Check Box 108",
  naGb: "Check Box 1022",
  naEd: "Check Box 1036",
  naNgd: "Check Box 1042",

  aW: "Check Box 105",
  aGd: "Check Box 107",
  aSky: "Check Box 1012",
  aGb: "Check Box 1024",
  aEd: "Check Box 1038",
  aNgd: "Check Box 1044",

  bW: "Check Box 109",
  bGd: "Check Box 1010",
  bSky: "Check Box 1011",
  bGb: "Check Box 1023",
  bEd: "Check Box 1037",
  bNgd: "Check Box 1043",

  cW: "Check Box 1013",
  cGd: "Check Box 1015",
  cSky: "Check Box 1017",
  cGb: "Check Box 1025",
  cEd: "Check Box 1039",
  cNgd: "Check Box 1045",

  dW: "Check Box 1014",
  dGd: "Check Box 1016",
  dSky: "Check Box 1021",
  dGb: "Check Box 1027",
  dEd: "Check Box 1041",
  dNgd: "Check Box 1047",

  nW1: "Check Box 1018",
  nGd1: "Check Box 1019",
  nSky1: "Check Box 1020",
  nGb1: "Check Box 1026",
  nEd1: "Check Box 1040",
  nNgd1: "Check Box 1046",

  nW2: "Check Box 1028",
  nGd2: "Check Box 1029",
  nSky2: "Check Box 1033",
  nGb2: "Check Box 1035",
  nEd2: "Check Box 1049",
  nNgd2: "Check Box 1051",

  xW: "Check Box 1030",
  xGd: "Check Box 1031",
  xSky: "Check Box 1032",
  xGb: "Check Box 1034",
  xEd: "Check Box 1048",
  xNgd: "Check Box 1050",

  openProtA: "Check Box 105",
  openProtA1: "Check Box 76",
  openProtA2: "Check Box 77",
  openProtA3: "Check Box 78",

  openProtB: "Check Box 79",
  openProtB1: "Check Box 80",
  openProtB2: "Check Box 83",
  openProtB3: "Check Box 84",

  openProtC: "Check Box 85",
  openProtCPlywood: "Check Box 87",
  openProtCOsb: "Check Box 86",
  openProtC1: "Check Box 88",
  openProtC2: "Check Box 89",
  openProtC3: "Check Box 90",

  openProtN: "Check Box 82",
  openProtN1: "Check Box 91",
  openProtN2: "Check Box 92",
  openProtN3: "Check Box 93",

  openProtX: "Check Box 94",

  openProtZ: "Check Box 95",

  // Signatures
  inspectorSignatureDate: ["Date", "Inspection Date"],
  homeOwnerSignatureDate: "Date_2",
};

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: "GMT",
});

const WIND_MITIGATION_PDF_NAME = "SW Wind Mitigation V2.pdf";

/**
 * Returns the logical value for a given HTML input element.
 */
const getElementValue = (element) => {
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
    const field = form.getFieldMaybe(name);

    if (!field) {
      console.warn(`Field "${name}" not found in the PDF template.`);
      return;
    }

    const isCheckbox = typeof field.check === "function";

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
      pdfName.forEach((name) => writeValue(name, value));
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
  const files = document.getElementById("imageUpload")?.files;

  if (!files || files.length == 0) {
    return;
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
        image =
          file.type === "image/png"
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
      const correctedWidth =
        rotationDegrees === 90 || rotationDegrees === -90
          ? imgHeight
          : imgWidth;
      const correctedHeight =
        rotationDegrees === 90 || rotationDegrees === -90
          ? imgWidth
          : imgHeight;

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
  const elements = document.querySelectorAll("#date, #inspectorSignatureDate");

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Shitty timezone conversion magic in play here

  elements.forEach((e) => {
    e.valueAsDate = today;
  });
});

// Download button handler – generates the filled PDF and triggers the download
document.querySelector("#download-pdf").addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    const filledBytes = await fill4Point();

    const blob = new Blob([filledBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const ownerName = document.querySelector("#ownerName").value || "Unknown";

    const a = Object.assign(document.createElement("a"), {
      href: url,
      download: `${ownerName} Wind Mitigation.pdf`,
    });

    a.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("PDF generation failed:", err);
    alert("Something went wrong while creating the PDF. Please try again.");
  }
});
