export type ReviewItem = {
  name: string;
  rating: 5;
  date: string;
  text: string;
  source: "Google";
};

export const reviews: ReviewItem[] = [
  {
    name: "Ahmet Elmas",
    rating: 5,
    date: "4 ay önce",
    text: "Bir arkadaşım sayesinde Nazım’la tanıştık. Arabam Mini Cooper 1.5d. Hem periyodik bakım hem de arıza tespiti konusunda hakkını veren tecrübeli bir usta; ekibi de yetkin ve işinde gücünde. Maliyetlerde abartı yok, neyse o. Ben mutluyum şahsen.",
    source: "Google",
  },
  {
    name: "Yusuf Mutlu",
    rating: 5,
    date: "6 ay önce",
    text: "Ustalığı ve kişiliği 10 numara insan.",
    source: "Google",
  },
  {
    name: "Recep Aydın",
    rating: 5,
    date: "3 yıl önce",
    text: "Bir arkadaş önerisi ile gittim. İyi ki de gittim; çok ilgili, çok mükemmel bir yer.",
    source: "Google",
  },
  {
    name: "Özcan Yılmaz",
    rating: 5,
    date: "3 yıl önce",
    text: "Aracımın arızasını iki aydır bulamadılar. NZM Motors ile bir arkadaşım tanıştırdı, arızayı sağ olsun Nazım Usta buldu. Allah razı olsun, hayırlı işler dilerim.",
    source: "Google",
  },
  {
    name: "Sezar Nacak",
    rating: 5,
    date: "4 yıl önce",
    text: "Araç tamiri konusunda çok başarılı ve güvenilir; çok hızlı ve etkili.",
    source: "Google",
  },
];