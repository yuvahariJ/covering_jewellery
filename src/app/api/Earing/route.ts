export const dynamic = "force-static";
import image1 from "../../../../public/Earing_1.jpg";
import image2 from "../../../../public/Earing_2.jpg";
import image3 from "../../../../public/Earing_3.jpg";
import image4 from "../../../../public/Earing_4.jpg";
import image5 from "../../../../public/Earing_5.jpg";
import image6 from "../../../../public/Earing_6.jpg";
import image7 from "../../../../public/Earing_7.jpg";
import image8 from "../../../../public/Earing_8.jpg";

export async function GET() {
  const data = {
    data: [
      {
        bannerImage: image2,
        price: "80",
        originalPrice: "100",
        instock: 2,
      },
      {
        bannerImage: image1,
        price: "80",
        originalPrice: "100",
      },
      {
        bannerImage: image3,
        price: "80",
        originalPrice: "100",
        instock: 2,
      },
      {
        bannerImage: image4,
        price: "80",
        originalPrice: "100",
        instock: 2,
      },
      {
        bannerImage: image5,
        price: "80",
        originalPrice: "120",
        instock: 2,
      },
      {
        bannerImage: image6,
        price: "80",
        originalPrice: "120",
      },
      {
        bannerImage: image7,
        price: "80",
        originalPrice: "120",
      },
      {
        bannerImage: image8,
        price: "80",
        originalPrice: "120",
      },
    ],
  };

  return Response.json({ data });
}
