export function imageLoader (asset: any): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = asset;
        img.addEventListener('load', () => {
            resolve(img);
        });
        img.addEventListener('error', (error) => {
            reject(error);
            console.log(error, "<==error");
        });
    });

}