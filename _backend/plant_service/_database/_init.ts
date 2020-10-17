express = require('express');
module.exports = express();

connection = require('../../../_repository/_config').connection;

connection.query('                                                              \
  INSERT INTO plant_varieties (slug, name, common_name, genus, family, img_url) \
  VALUES                                                                        \
    ("quercus-rotundifolia", "Quercus rotundifolia", "Evergreen oak", "Quercus", "Fagaceae", "https://bs.floristic.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30"),            \
    ("urtica-dioica", "Urtica dioica", "Stinging nettle", "Urtica", "Urticaceae", "https://bs.floristic.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248"),                       \
    ("dactylis-glomerata", "Dactylis glomerata", "Orchardgrass", "Dactylis", "Poaceae", "https://bs.floristic.org/image/o/05c2f3cf28a921235daece7b31806741c7251784"),                 \
    ("achillea-millefolium", "Achillea millefolium", "Common yarrow", "Achillea", "Asteraceae", "https://bs.floristic.org/image/o/d8bdcc8a8328551e6e6ce50129e8e7a871b6b3a5"),         \
    ("plantago-lanceolata", "Plantago lanceolata", "Narrowleaf plantain", "Plantago", "Plantaginaceae", "https://bs.floristic.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b"), \
    ("quercus-robur", "Quercus robur", "English oak", "Quercus", "Fagaceae", "https://bs.floristic.org/image/o/2292b670683abdaac354389514105df0018d9ef8"),                            \
    ("festuca-rubra", "Festuca rubra", "Red fescue", "Festuca", "Poaceae", "https://bs.floristic.org/image/o/d073c0ecfeb2f69248e9102eb6ec10f8ccc628cb"),                              \
    ("ranunculus-repens", "Ranunculus repens", "Creeping buttercup", "Ranunculus", "Ranunculaceae", "https://bs.floristic.org/image/o/c6d9a5222b6ef0e3a7bdef3350278718d3097bce"),     \
    ("holcus-lanatus", "Holcus lanatus", "Common velvetgrass", "Holcus", "Poaceae", "https://bs.floristic.org/image/o/46619775d4319328b2fad6f1ba876ccca2d03534"),                     \
    ("trifolium-repens", "Trifolium repens", "White clover", "Trifolium", "Fabaceae", "https://bs.floristic.org/image/o/c766ed84c547abac6021244bc0014d665ba7726f"),                   \
    ("fraxinus-excelsior", "Fraxinus excelsior", "European ash", "Fraxinus", "Oleaceae", "https://bs.floristic.org/image/o/84ef20b0276c3e0a6d32dd97a7b987b510feb961"),                \
    ("crataegus-monogyna", "Crataegus monogyna", "Oneseed hawthorn", "Crataegus", "Rosaceae", "https://bs.floristic.org/image/o/f3ca7a240ea7d0f6c011a3259f783c7b82f10dc8"),           \
    ("trifolium-pratense", "Trifolium pratense", "Red clover", "Trifolium", "Fabaceae", "https://bs.floristic.org/image/o/7eb243363838c9975c57204057e63fa8101c26d8"),                 \
    ("ranunculus-acris", "Ranunculus acris", "Tall buttercup", "Ranunculus", "Ranunculaceae", "https://bs.floristic.org/image/o/8390d605e1947cb44e24af9492f96df4a34e8ca8"),           \
    ("corylus-avellana", "Corylus avellana", "Common filbert", "Corylus", "Betulaceae", "https://bs.floristic.org/image/o/0d92cadb0d66dce1b0a8b26913125d6501e31d68"),                 \
    ("fagus-sylvatica", "Fagus sylvatica", "European beech", "Fagus", "Fagaceae", "https://bs.floristic.org/image/o/a733221df31a1ff99af03566841744f3b4c6cffe"),                       \
    ("juncus-effusus", "Juncus effusus", "Common rush", "Juncus", "Juncaceae", "https://bs.floristic.org/image/o/bab95d74bfaeb9f6a736cf35d048e46cc6624d50"),                          \
    ("rumex-acetosa", "Rumex acetosa", "Garden sorrel", "Rumex", "Polygonaceae", "https://bs.floristic.org/image/o/780b9f3c63318588b8874d608c2d4900fc2adce3"),                        \
    ("anthoxanthum-odoratum", "Anthoxanthum odoratum", "Sweet vernalgrass", "Anthoxanthum", "Poaceae", "https://bs.floristic.org/image/o/fcf64ef0676db8ca9d2abf4017f5b8211b10e0b1"),  \
    ("filipendula-ulmaria", "Filipendula ulmaria", "Queen of the meadow", "Filipendula", "Rosaceae", "https://bs.floristic.org/image/o/168ee7151e03184eaa0ae4d4ed31f8a0131e39f6");    \
  INSERT INTO plant_items (plant_variety_id, item_name)                       \
  VALUES (                                                                    \
    1,                                                                        \
    "Mexican Marigold Packet Seeds"                                           \
  );                                                                          \
  INSERT INTO plant_items (plant_variety_id, item_name, quantity, unit)       \
  VALUES (                                                                    \
    1,                                                                        \
    "Premium Potting Mix",                                                    \
    250,                                                                      \
    "gram"                                                                    \
  );                                                                          \
  INSERT INTO plant_instructions (plant_variety_id, step_number, instruction) \
  VALUES (                                                                    \
    1,                                                                        \
    1,                                                                        \
    "Put seeds into the ground. Bury 20 cm deep."                             \
  );                                                                          \
  INSERT INTO plant_instructions (plant_variety_id, step_number, instruction) \
  VALUES (                                                                    \
    1,                                                                        \
    2,                                                                        \
    "Cover with premium potting mix."                                         \
  );                                                                          \
  INSERT INTO plant_instructions (plant_variety_id, step_number, instruction) \
  VALUES (                                                                    \
    1,                                                                        \
    3,                                                                        \
    "Success!"                                                                \
  );                                                                          \
  INSERT INTO plant_scientific_details (plant_variety_id, ph_low, ph_high)    \
  VALUES (                                                                    \
    1,                                                                        \
    7.5,                                                                      \
    8.5                                                                       \
  );'
, (err: any) => {
  if (err) throw err;
  console.log('> MySQL: Initialized plant tables');
});