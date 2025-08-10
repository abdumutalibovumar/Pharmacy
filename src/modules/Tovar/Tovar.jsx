import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import "../../assets/scss/modules/_tovar.scss";
import { Header } from "../../components/Header";

const medicines = [
  {
    name: "Виферон",
    description: "Противовирусное средство",
    price: 120,
    img: "https://viferon.su/2015/wp-content/uploads/2022/03/3.webp",
  },
  {
    name: "Парацетамол",
    description: "Жаропонижающее и обезболивающее средство",
    price: 40,
    img: "https://vivafarm.md/upload/iblock/996/zxvk1u02s0kerdsvq65p7ipgvym5m0ce/%D0%9F%D0%B0%D1%80%D0%B0%D1%86%D0%B5%D1%82%D0%B0%D0%BC%D0%BE%D0%BB%200,5%D0%B3%20%E2%84%9620.png",
  },
  {
    name: "Цитрамон",
    description: "Обезболивающее средство",
    price: 30,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTE8-beR3y3LvI_xu2kQL5rlcfmrbV3B0dPg&s",
  },
  {
    name: "Лоперамид",
    description: "Средство против диареи",
    price: 35,
    img: "https://asevalar.ru/upload/iblock/185/f4z5w57gr0n7f1akca9hl6idxya88621_1920_1080.jpg",
  },
  {
    name: "Кларитромицин",
    description: "Антибиотик для лечения инфекций",
    price: 130,
    img: "https://borimed.com/sites/default/files/product/klaritromicin.jpg",
  },
  {
    name: "Фенистил",
    description: "Антигистаминное средство",
    price: 90,
    img: "https://paracels.object.pscloud.io/images/d05fcbf0-251e-4feb-b762-92789ccd8a1a_1200x1200.jpeg",
  },
  {
    name: "Мезим",
    description: "Ферментный препарат для пищеварения",
    price: 60,
    img: "https://m.apteka911.ua/content/shop/products/31135/photos/138268-31135-big-1500x1500-1cdc.jpg",
  },
  {
    name: "Дексаметазон",
    description: "Противовоспалительный стероид",
    price: 100,
    img: "https://gosapteka.ru/upload/resize_cache/iblock/8f9/360_300_1/xrkbgz4jthd18c7jom918at6jxgmp70w.jpg",
  },
  {
    name: "Пантопразол",
    description: "Средство для снижения кислотности желудка",
    price: 85,
    img: "https://lekpharm.by/assets/resized/464-419-fit-t/uploads/catalog/pantoprazol/pantoprazol-40-30-small.jpg",
  },
  {
    name: "Цефтриаксон",
    description: "Антибиотик широкого спектра действия",
    price: 200,
    img: "https://borimed.com/sites/default/files/product/ceftriakson-05-g-v.jpg",
  },
  {
    name: "Метформин",
    description: "Препарат для лечения диабета",
    price: 110,
    img: "https://borimed.com/sites/default/files/product/metformin-500-mg.jpg",
  },
  {
    name: "Лоратадин",
    description: "Антигистаминное средство",
    price: 70,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVMXEzAmV6f-tw5dbYrpKXVv0-84d2UMrgA&s",
  },
  {
    name: "Амоксициллин",
    description: "Антибиотик для лечения инфекций",
    price: 120,
    img: "https://ozerki.ru/er-pics/images/goods/313661/main",
  },
  {
    name: "Нитроглицерин",
    description: "Средство для сердечно-сосудистой системы",
    price: 95,
    img: "https://asevalar.ru/upload/iblock/fc5/fc514238e6bf2ce17d6e7bb60f7bc4e7_1920_1080.jpg",
  },
  {
    name: "Витамин C",
    description: "Иммуномодулятор",
    price: 25,
    img: "https://naturalsupp.ru/upload/iblock/49f/3tcjm02iogcta9ig2co5dx7mtcrdc8xg.jpg",
  },
  {
    name: "Диклофенак",
    description: "Противовоспалительное средство",
    price: 60,
    img: "https://narod-apteka.ru/Storage/diklofenak-sintez-gelj-5percent-100-g.jpg",
  },
  {
    name: "Ингавирин",
    description: "Противовирусное средство",
    price: 160,
    img: "https://farmamir.kg/upload/iblock/355/ahgdneujgejqbr73j8rfq8pxfe75ilkp.png",
  },
  {
    name: "Мукалтин",
    description: "Отхаркивающее средство",
    price: 35,
    img: "https://cdn.etabl.ru/thumbnails/000145027_v1.webp",
  },
  {
    name: "Но-шпа",
    description: "Спазмолитическое средство",
    price: 55,
    img: "https://samson-pharma.ru/_next/image/?url=https%3A%2F%2Fpics.erkapharm.com%2Fimages%2Fgoods%2F339606%2Fmain.jpg&w=732&q=90",
  },
  {
    name: "Проктозан",
    description: "Средство для лечения геморроя",
    price: 125,
    img: "https://saybol.kz/media/products/10315/conversions/main.jpg",
  },
  {
    name: "Гептрал",
    description: "Гепатопротектор",
    price: 140,
    img: "https://liki.uz/content/shop/products/20422/geptral-tabletki-po-500-mg-20-2-blistera-x-10-tabletok-abbvi-prod-400x400-06dc.jpg",
  },
  {
    name: "Ренни",
    description: "Средство от изжоги",
    price: 40,
    img: "https://farmamir.kg/upload/iblock/da0/47zxyes7h0s5aex7xae037ym3thnbvr2.jpg",
  },
  {
    name: "Сумамед",
    description: "Антибиотик широкого спектра действия",
    price: 210,
    img: "https://social-apteka.ru/upload/resize_cache/iblock/own/320_320_0/PREV_11702-1.png",
  },
  {
    name: "Тамифлю",
    description: "Противовирусное средство",
    price: 280,
    img: "https://lekar.kg/upload/iblock/f26/ui0wy0059dia29fseraf6g2oy8w9l8ix/image.png",
  },
  {
    name: "Феназепам",
    description: "Седативное средство",
    price: 75,
    img: "https://apteka245.ru/img/drugs/nnt4069.jpg",
  },
  {
    name: "Хлоргексидин",
    description: "Антисептическое средство",
    price: 45,
    img: "https://healthplanet.by/upload/cacheResize/24b/c52/a70f90b253a68526edc1f8e731d21ee0.jpg",
  },
  {
    name: "Цитрамон П",
    description: "Обезболивающее и жаропонижающее",
    price: 30,
    img: "https://uteka.ru/media/big/4/e8/4e844eccc45b0bc5b5683e952b2a67dc.jpg",
  },
  {
    name: "Ибупрофен",
    description: "Противовоспалительное средство",
    price: 70,
    img: "https://ozerki.ru/er-pics/images/goods/77719/main",
  },
  {
    name: "Эссенциале",
    description: "Гепатопротектор",
    price: 170,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1WCJVCy9vn4wrDbCuG7auGWxhOuwzCeMkQ&s",
  },
  {
    name: "Юнидокс Солютаб",
    description: "Антибиотик широкого спектра действия",
    price: 180,
    img: "https://pics.erkapharm.com/images/goods/389150/main.jpg",
  },
  {
    name: "Актовегин",
    description: "Средство для улучшения кровообращения",
    price: 190,
    img: "https://pharmaclick.uz/upload/Sh/imageCache/496/215/2155051150841737.webp",
  },
  {
    name: "Бисопролол",
    description: "Препарат для сердца",
    price: 130,
    img: "https://borimed.com/sites/default/files/product/bisoprolol-10.jpg",
  },
  {
    name: "Глицин",
    description: "Нервная система",
    price: 40,
    img: "https://farmamir.kg/upload/iblock/916/0ajc1b2ocyyzcclzsan2fdo6c609lh2v.webp",
  },
  {
    name: "Детралекс",
    description: "Средство при варикозе",
    price: 160,
    img: "https://root.cdntbl.com/img/goods/0aa1763e-7e90-4a2b-ab48-bf858d497f74/1/img_0.jpg?v=AAAAAAwD8MY",
  },
  {
    name: "Ессенциале форте",
    description: "Гепатопротектор",
    price: 175,
    img: "https://neman.kg/images/watermarked/detailed/22/essensial-1.webp",
  },
  {
    name: "Желчегонное",
    description: "Средство для печени",
    price: 90,
    img: "https://www.eapteka.ru/upload/offer_photo/299/832/resized/230_230_1_8b003c2fb77911baeb94c4ab7b242d8c.png?t=1653393326",
  },
  {
    name: "Зодак",
    description: "Антигистаминное средство",
    price: 95,
    img: "https://farmamir.kg/upload/iblock/880/r1b7lximhss8ye6bzjy0873q6f2cer4l.webp",
  },
  {
    name: "Ибуклин",
    description: "Обезболивающее средство",
    price: 65,
    img: "https://borimed.com/sites/default/files/product/ibuklin-tabletki.jpg",
  },
  {
    name: "Кальций Д3 Никомед",
    description: "Витаминный препарат",
    price: 85,
    img: "https://evropharm.ru/Storage/8421.jpg",
  },
  {
    name: "Левофлоксацин",
    description: "Антибиотик широкого спектра действия",
    price: 190,
    img: "https://uteka.ru/media/big/e/c2/ec25f210172bf43bbb4bddf8d39e7d21.jpg",
  },
  {
    name: "Мотилиум",
    description: "Средство для пищеварения",
    price: 55,
    img: "https://tver-apteka.ru/upload/iblock/1df/vvd401a2mbrym4d5e2d6z5ddosjr1vxq.jpeg",
  },
  {
    name: "Нурофен",
    description: "Обезболивающее средство",
    price: 60,
    img: "https://cdn.stolichki.ru/s/drugs/large/26/2658_3.jpg",
  },
  {
    name: "Органика",
    description: "Биологически активная добавка",
    price: 120,
    img: "https://wine-shop.kz/p/items/xl/xl-organika-tiger-special-0-7-1406.jpg",
  },
  {
    name: "Панангин",
    description: "Средство для сердца",
    price: 130,
    img: "https://lekar.kg/upload/resize_cache/iblock/189/jg2ubmxc363geaxfescn7smsimrarjoq/800_800_1/image.png",
  },
  {
    name: "Римантадин",
    description: "Противовирусное средство",
    price: 110,
    img: "https://stoletov.ru/er-pics/images/goods/350336/main",
  },
  {
    name: "Синупрет",
    description: "Средство от простуды",
    price: 100,
    img: "https://farmamir.kg/upload/iblock/92b/wit9olzdp71n1rsmy0lp2gk2bjbc6kli.png",
  },
  {
    name: "Тетрациклин",
    description: "Антибиотик широкого спектра действия",
    price: 160,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ccCE9NqVv06XZ_DZ2ViFo8VvpWWfagMXxQ&s",
  },
  {
    name: "Урсофальк",
    description: "Препарат для печени",
    price: 180,
    img: "https://spb.uteka.ru/media/1024/9/d6/9d6edf69e2cc7f6a0167e5629e9723f2.jpg",
  },
  {
    name: "Флуконазол",
    description: "Противогрибковое средство",
    price: 140,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK72j9S6Ps5VzbE8rrO1L2sCfq79ixPe2RBg&s",
  },
  {
    name: "Хилак Форте",
    description: "Средство для пищеварения",
    price: 70,
    img: "https://uteka.ru/media/big/f/75/f75801f06a37a7048af9263f5666f659.jpg",
  },
  {
    name: "Ципрофлоксацин",
    description: "Антибиотик широкого спектра действия",
    price: 155,
    img: "https://asevalar.ru/upload/iblock/8a8/r91pi58omicvuq2q1b0wi0hj3bz671om_1920_1080.jpg",
  },
  {
    name: "Чай Каркаде",
    description: "Травяной чай",
    price: 25,
    img: "https://static.sello.uz/unsafe/x1600/https://static.sello.uz//fm/20211127/54db3a69-3760-4b7b-9503-14339cdf9ac1.jpg",
  },
  {
    name: "Шавлин",
    description: "Средство от простуды",
    price: 45,
    img: "https://beeovita.com/image/cache/wp/gj/hcupd/PICFRONT3D/228891-750x750.webp",
  },
  {
    name: "Эффералган",
    description: "Жаропонижающее и обезболивающее",
    price: 50,
    img: "https://ozerki.ru/er-pics/images/goods/42438/main",
  },
  {
    name: "Юнифарм",
    description: "Биологически активная добавка",
    price: 100,
    img: "https://www.unipharm.ru/upload/iblock/e62/id9cqws2l2btvfj9hedyzcymr354a1k6.png",
  },
];

function Tovar() {
  const [selectedMedicine, setSelectedMedicine] = React.useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = React.useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  const openModal = (medicine) => setSelectedMedicine(medicine);
  const closeModal = () => setSelectedMedicine(null);

  const handleAddToCart = (medicine) => {
    addToCart(medicine);
    const updatedCart = [...cartItems, { ...medicine, quantity: 1 }];
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    toast.success(`Добавлено в корзину: ${medicine.name}`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const isInCart = (medicine) => {
    return cartItems.some((item) => item.name === medicine.name);
  };

  return (
    <>
    <Header title={'Товары'}/>
      <div className="container">
          <button className="cart-button" onClick={handleGoToCart}>
            Загляните в корзину ( {cartItems.length} )
          </button>
        <ToastContainer />
        <div className="tov">
          <div className="grid">
            {medicines.map((med, idx) => (
              <div key={idx} className="card" onClick={() => openModal(med)}>
                <img src={med.img} alt={med.name} loading="lazy" />
                <h3>{med.name}</h3>
                <p className="description">
                  {med.description.length > 60
                    ? med.description.slice(0, 57) + "..."
                    : med.description}
                </p>

                {isInCart(med) ? (
                  <button className="added">Добавлено</button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(med);
                    }}
                  >
                    Добавь <span>{med.price}</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          {selectedMedicine && (
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-btn"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <img src={selectedMedicine.img} alt={selectedMedicine.name} />
                <h2>{selectedMedicine.name}</h2>
                <p>{selectedMedicine.description}</p>

                {isInCart(selectedMedicine) ? (
                  <button className="added">Добавлено</button>
                ) : (
                  <button
                    className="add-cart-btn"
                    onClick={() => {
                      handleAddToCart(selectedMedicine);
                      closeModal();
                    }}
                  >
                    Добавить в корзину <span>{selectedMedicine.price}</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Tovar;
