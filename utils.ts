export async function getBase64ImageUrl(imageId: string): Promise<string | undefined> {
    const response = await fetch(`${process.env.CLOUDINARY_BASE_URL}w_100/e_blur:1000,q_auto,f_auto${imageId}`);
    const buffer = await response.arrayBuffer();
    const data = Buffer.from(buffer).toString('base64');
    return `data:image/jpeg;base64,${data}`;
}
