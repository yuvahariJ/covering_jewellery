export const dynamic = 'force-static'
 
export async function GET() {
  
    const data = {
        data: [
            {
                "bannerImage": "https://rukminim2.flixcart.com/flap/96/96/image/69c6589653afdb9a.png",
                "price": "2400"
              },
              {
                "bannerImage": "https://rukminim2.flixcart.com/flap/96/96/image/69c6589653afdb9a.png",
                "price": "3000"
              },
              {
                "bannerImage": "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/9c64dfa667885ca9.png",
                "price": "3400"
              },
              {
                "bannerImage": "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/75ac28a1e9192898.png",
                "price": "2400"
              },
              {
                "bannerImage": "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/cd6aca4f61e8ea95.png",
                "price": "3000"
              },
              {
                "bannerImage": "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/9c64dfa667885ca9.png",
                "price": "3400"
              }
      ]
  }
 
  return Response.json({ data })
}