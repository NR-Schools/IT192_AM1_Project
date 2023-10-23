export class ImageUtils {
	static fileToByteArray(file: File): Promise<ArrayBuffer> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();

			reader.onload = () => {
				resolve(reader.result as ArrayBuffer);
			};

			reader.onerror = (error) => {
				reject(error);
			};

			reader.readAsArrayBuffer(file);
		});
	}

	static byteArrayToImageDataUrl(byteArray: ArrayBuffer): string {
		const blob = new Blob([new Uint8Array(byteArray)], { type: "image/png" });
		return URL.createObjectURL(blob);
	}

}
