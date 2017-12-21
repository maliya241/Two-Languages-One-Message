$(".lessonbutton").click(function () {
   $(".lessonbutton").not(this).next(".lessondropdown").slideUp("slow");
  if ($(this).next(".lessondropdown").is(":hidden") ) {
    $(this).next(".lessondropdown").slideDown("slow");
  } else{
    $(this).next(".lessondropdown").slideUp("slow");
  } 
});

// PDF Information
var pdfs = [ { 
    pdfLocation:"pdf/SpanishTheImpactof7Days.pdf", 
    canvasId:"SpanishTheImpactof7Days"
    }, {
    pdfLocation:"pdf/SpanishLaBibliaparaNinos.pdf",
    canvasId:"SpanishLaBibliaparaNinos"
    }, {
    pdfLocation:"pdf/SpanishLeccionesdeJob.pdf",
    canvasId:"SpanishLeccionesdeJob"
    }, {
    pdfLocation:"pdf/EnglishLessonsfromJob.pdf",
    canvasId:"EnglishLessonsfromJob"
    }, {
    pdfLocation:"pdf/EnglishRomans.pdf", 
    canvasId:"EnglishRomans"
    }, {
    pdfLocation:"pdf/SpanishLaHistoriadeDiosparaMiPreguntasyAplicaciones.pdf", 
    canvasId:"SpanishLaHistoriadeDiosparaMiPreguntasyAplicaciones"
    }, {
    pdfLocation:"pdf/SpanishLaHistoriaParaNinosReflecciones.pdf", 
    canvasId:"SpanishLaHistoriaParaNinosReflecciones"
  }, {
    pdfLocation:"pdfTest/HedgehogInformation.pdf", 
    canvasId:"HedgehogInformation"
  }, {
    pdfLocation:"pdfTest/socktoberflyer2.pdf", 
    canvasId:"socktoberflyer2"
  }, {
    pdfLocation:"pdfTest/Panda.pdf", 
    canvasId:"Panda"
  }, {
    pdfLocation:"pdfTest/socktoberflyer1.pdf", 
    canvasId:"socktoberflyer1"
  }, {
    pdfLocation:"pdfTest/TheHedgehogAndTheFox.pdf", 
    canvasId:"TheHedgehogAndTheFox"
  }
  ]

// Asynchronous download PDF
pdfs.forEach(pdfsFunction)
function pdfsFunction(item) {
  PDFJS.getDocument(item['pdfLocation'])
    .then(function(pdf) {
      return pdf.getPage(1);
    })
    .then(function(page) {
      // Set scale (zoom) level
      var scale = 0.5;

      // Get viewport (dimensions)
      var viewport = page.getViewport(scale);

      // Get canvas#the-canvas
      var canvas = document.getElementById(item['canvasId']);

      // Fetch canvas' 2d context
      var context = canvas.getContext('2d');

      // Set dimensions to Canvas
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Prepare object needed by render method
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };

      // Render PDF page
      page.render(renderContext);
    });
}