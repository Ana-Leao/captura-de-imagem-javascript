document.addEventListener("DOMContentLoaded", () => {

  const video = document.getElementById("video");
  const capturarButton = document.getElementById("capturarButton");
  const canvas = document.getElementById("canvas");
  const iconCameraDesligada = document.getElementById("iconCameraDesligada");


  navigator.mediaDevices.getUserMedia({video: true})
    .then((stream) => {
      iconCameraDesligada.setAttribute("hidden", "true");
      video.removeAttribute("hidden");
      video.srcObject = stream;
      video.play();
      console.log(stream)
    })
    .catch((erro) => {
      alert(erro);
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