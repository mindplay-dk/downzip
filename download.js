import DownZip from "downzip";

const ROOT_URL = window.location.origin;

const downZip = new DownZip();

/*await*/ downZip.register({ mapScriptUrl: (url) => {
  console.log(`${ROOT_URL}/`.href);

  return new URL(url, `${ROOT_URL}/`).href;
}});

export async function download(e) {
  // const files = new Array(50).fill(null).map((_, i) => ({
  //   name: `image-${i+1}.jpg`,
  //   downloadUrl: `${ROOT_URL}/files/image-${i+1}.jpg`,
  //   size: 11111,
  // }));

  e.preventDefault();

  const files = new Array(10).fill(null).map((_, i) => ({
    name: `big-${i+1}.7z`,
    downloadUrl: `${ROOT_URL}/files/big-${i+1}.7z`,
    size: 471147202,
  }));

  const downloadId = "11111";
  const zipFileName = "images.zip";

  const downloadUrl = await downZip.downzip(
    downloadId,
    zipFileName,
    files
  );

  window.location.href = `${ROOT_URL}/${downloadUrl}`;
}
