// Gallery data and functionality
/*export const galleryData = {
    "28022614428_4d2a068ca9_h.jpg": "Szyby kuchenne z grafiką",
    "41849402942_24fc0037a6_k.jpg": "Szyby kuchenne z grafiką",
    "8484614069_6419161cf3_b.jpg": "Oszklona kabina prysznicowa",
    "41849398212_a8797f8947_b.jpg": "Szyby kuchenne z grafiką",
    "8484575385_ec54256dcd_b.jpg": "Oszklona kabina prysznicowa",
    "28022615208_8d659cf119_c.jpg": "Szyba z grafiką",
    "41849403622_05b5cb6143_c.jpg": "Oszklona kabina prysznicowa",
    "41849404342_6def1325da_h.jpg": "Szyby kuchenne z grafiką",
    "41849405172_3ee71afab0_b.jpg": "Szyby kuchenne z grafiką"
};*/
export const galleryData = {
 "28022614428_4d2a068ca9_h.jpg": "Szyby kuchenne z grafiką",
 "41849402942_24fc0037a6_k.jpg": "Szyby kuchenne z grafiką", 
 "8485753770_6e7fdf3dac_b.jpg": "Oszklona kabina prysznicowa",
 "41849398212_a8797f8947_b.jpg": "Szyby kuchenne z grafiką",
 "131.jpg": "Oszklona kabina prysznicowa",
 "28022615208_8d659cf119_c.jpg": "Szyba z grafiką",
 "41849403622_05b5cb6143_c.jpg": "Oszklona kabina prysznicowa",
 "41849404342_6def1325da_h.jpg": "Szyby kuchenne z grafiką",
 "41849405172_3ee71afab0_b.jpg": "Szyby kuchenne z grafiką",
 "8561319797_8fbabdf826_b.jpg": "Kuchnia",
 "8562423504_d1858889aa_b.jpg": "Lustra łazienkowe",
 "8484575385_ec54256dcd_b.jpg": "Oszklona wiata",
 "129.jpg": "Szyby kuchenne z grafiką",
 "8441920383_64ee4d8c4b_b.jpg": "Oszklona kabina prysznicowa",
 "28022611908_27f61ff481_h.jpg": "Oszklona kabina prysznicowa",
 "8484614069_6419161cf3_b.jpg": "Drzwi szklane do kabiny",
 "8484636067_5f27638986_b.jpg": "Ściana z luster w łazience",
 "8419454597_821cd7bfc6_b.jpg": "Kuchnia",
 "23961698803_4181c29bd7_b.jpg": "Szyby kuchenne z grafiką",
 "24506232511_62d05de358_b.jpg": "Szyba z grafiką na ścianie",
 "8687481855_91acf1b721_c.jpg": "Szyby kuchenne z grafiką",
 "24506231711_ca0aa615ae_b.jpg": "Szyby kuchenne z grafiką", 
 "23021036681_9936307da1_c.jpg": "Szyby kuchenne z grafiką",
 "8506803701_75435e7ca2_b.jpg": "Szklane półki",
 "9186655556_189858e341_c.jpg": "Kuchnia",
 "8485810172_cf935c0397_b.jpg": "Wiata wejściowa",
 "8484717719_3aa9aafe0f_b.jpg": "Wiata wejściowa",
 "8441920851_270e3de190_b.jpg": "Kuchnia",
 "8484579267_ff6930022d_b.jpg": "Kuchnia", 
 "8443011242_fba820bcd1_b.jpg": "Kuchnia",
 "8506663031_1bd4e8969f_b.jpg": "Kuchnia",
 "8490487870_0d08945556_b.jpg": "Kuchnia",
 "8485653808_a478370cf4_b.jpg": "Kuchnia",
 "8561319613_eb4e7298c6_b.jpg": "Kuchnia",
 "8506663327_be273c5b7c_b.jpg": "Kuchnia",
 "8484653205_26612c8253_b.jpg": "Kuchnia",
 "8485763550_6a7bbec0b9_b.jpg": "Kuchnia",
 "8484564579_b5902cf6a9_b.jpg": "Kuchnia",
 "9186770664_9df1a2fbc8_c.jpg": "Kuchnia",
 "8484542943_5c31167e30_b.jpg": "Kuchnia",
 "8687482407_92da188ef4_b.jpg": "Kuchnia",
 "8687482879_acdc29eeed_c.jpg": "Oszklony box",
 "8443011344_65baa3ac20_b.jpg": "Kuchnia"
};

export function initGallery() {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        Object.entries(galleryData).forEach(([image, caption]) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            galleryItem.innerHTML = `
                <img src="originals/${image}" alt="${caption}">
                <div class="caption">${caption}</div>
            `;
            
            gallery.appendChild(galleryItem);
        });
    }
}
