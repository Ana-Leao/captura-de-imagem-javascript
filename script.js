document.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById("video");
  const capturarButton = document.getElementById("capturarButton");
  const canvas = document.getElementById("canvas");
  const cameraDesligada = document.getElementById("cameraDesligada");


  navigator.mediaDevices.getUserMedia({video: true})
    .then((stream) => {
      cameraDesligada.style.display = "none";
      video.removeAttribute("hidden");
      video.srcObject = stream;
      video.play();
      console.log(stream)
    })
    .catch((erro) => {
      cameraDesligada.style.display = "flex";
      // alert(erro);
      console.log(erro);
    });

    function capturarImagem() {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0);
    }

    capturarButton.addEventListener("click", capturarImagem);

})