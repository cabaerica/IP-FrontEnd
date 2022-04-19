import React from 'react'
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
import "../stylesheets/ShoppingCart.css"

const data = {
  "data": [
    {
      "id": 9,
      "title": "USB sound card, Virtual 7.1 Channel, headphone adapter and microphone, white",
      "description": "It is a small external sound card with two 3.5 mm Jack ports for connecting the microphone and headphones.",
      "price": 18.99,
      "rating": 5.0,
      "categoryId": 9,
      "characteristics": [
        {
          "value": {
            "id": 54,
            "title": "USB"
          },
          "characteristic": {
            "id": 48,
            "title": "Interface"
          }
        },
        {
          "value": {
            "id": 55,
            "title": "2 x 3.5 mm jack"
          },
          "characteristic": {
            "id": 49,
            "title": "Connectors (outputs)"
          }
        },
        {
          "value": {
            "id": 56,
            "title": "1 x USB"
          },
          "characteristic": {
            "id": 50,
            "title": "Connectors (inputs)"
          }
        },
        {
          "value": {
            "id": 57,
            "title": "Universal"
          },
          "characteristic": {
            "id": 51,
            "title": "Operating system"
          }
        }
      ],
      "files": [
        {
          "id": 37,
          "base64": "https://s13emagst.akamaized.net/products/41216/41215926/images/res_b73f5f54bba070825c141d12b929a422.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 38,
          "base64": "https://s13emagst.akamaized.net/products/41216/41215926/images/res_476647d9d47c0d21420a3674803ba101.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 39,
          "base64": "https://s13emagst.akamaized.net/products/41216/41215926/images/res_51f45667e083798466458caa51979743.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 40,
          "base64": "https://s13emagst.akamaized.net/products/41216/41215926/images/res_b8d9a7187456d65e1f79fd4fcdfefa2b.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 41,
          "base64": "https://s13emagst.akamaized.net/products/41216/41215926/images/res_9270c3f6322691261d67862ddcb814eb.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 42,
          "base64": "https://s13emagst.akamaized.net/products/41216/41215926/images/res_4ab4a350dfb1dd835b21900f10a28fa7.jpg",
          "uploadedAt": "2022-04-12"
        }
      ]
    },
    {
      "id": 15,
      "title": "ASUS MW202 Wireless Mouse, Blue",
      "description": "The MW202 Silent Wireless Mouse is ideal for use in a quiet environment, such as at a business meeting, in the library, at night, and so on.",
      "price": 37.99,
      "rating": 4.87,
      "categoryId": 12,
      "characteristics": [
        {
          "value": {
            "id": 65,
            "title": "Standard"
          },
          "characteristic": {
            "id": 57,
            "title": "Type"
          }
        },
        {
          "value": {
            "id": 73,
            "title": "4000"
          },
          "characteristic": {
            "id": 58,
            "title": "Resolution (dpi)"
          }
        },
        {
          "value": {
            "id": 74,
            "title": "5/1"
          },
          "characteristic": {
            "id": 59,
            "title": "Buttons / wheels"
          }
        },
        {
          "value": {
            "id": 68,
            "title": "Wireless"
          },
          "characteristic": {
            "id": 60,
            "title": "Mouse interface"
          }
        }
      ],
      "files": [
        {
          "id": 59,
          "base64": "https://s13emagst.akamaized.net/products/41496/41495330/images/res_b2eb48d6314b37dc7d1a2ced78e22ac0.jpg",
          "uploadedAt": "2022-04-12"
        }
      ]
    },
    {
      "id": 18,
      "title": "ASUS MW202 Wireless Mouse, Gold",
      "description": "The MW202 Silent Wireless Mouse is ideal for use in a quiet environment, such as at a business meeting, in the library, at night, and so on.",
      "price": 37.99,
      "rating": 4.87,
      "categoryId": 12,
      "characteristics": [
        {
          "value": {
            "id": 65,
            "title": "Standard"
          },
          "characteristic": {
            "id": 57,
            "title": "Type"
          }
        },
        {
          "value": {
            "id": 73,
            "title": "4000"
          },
          "characteristic": {
            "id": 58,
            "title": "Resolution (dpi)"
          }
        },
        {
          "value": {
            "id": 74,
            "title": "5/1"
          },
          "characteristic": {
            "id": 59,
            "title": "Buttons / wheels"
          }
        },
        {
          "value": {
            "id": 68,
            "title": "Wireless"
          },
          "characteristic": {
            "id": 60,
            "title": "Mouse interface"
          }
        }
      ],
      "files": [
        {
          "id": 70,
          "base64": "https://s13emagst.akamaized.net/products/41496/41495332/images/res_845c138109bcb17692377074eb9790b0.jpg",
          "uploadedAt": "2022-04-12"
        }
      ]
    },
    {
      "id": 23,
      "title": "A + Ghost metal gaming keyboard, rainbow lighting",
      "description": "The A + Ghost metal gaming keyboard gives you increased precision and lightness of movement due to the efficient movement of your fingers when typing.",
      "price": 44.99,
      "rating": 4.33,
      "categoryId": 13,
      "characteristics": [
        {
          "value": {
            "id": 8,
            "title": "Gaming"
          },
          "characteristic": {
            "id": 57,
            "title": "Type"
          }
        },
        {
          "value": {
            "id": 54,
            "title": "USB"
          },
          "characteristic": {
            "id": 48,
            "title": "Interface"
          }
        },
        {
          "value": {
            "id": 82,
            "title": "Yes"
          },
          "characteristic": {
            "id": 61,
            "title": "Illuminated keyboard"
          }
        },
        {
          "value": {
            "id": 5,
            "title": "Black"
          },
          "characteristic": {
            "id": 5,
            "title": "Color"
          }
        }
      ],
      "files": [
        {
          "id": 86,
          "base64": "https://s13emagst.akamaized.net/products/28915/28914304/images/res_9a84c1de9a6b47f37d93acc031bc8e9c.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 87,
          "base64": "https://s13emagst.akamaized.net/products/28915/28914304/images/res_3bdff26695a7a217054414532e733cd6.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 88,
          "base64": "https://s13emagst.akamaized.net/products/28915/28914304/images/res_6ef4fe50f34b0023266f55c70dca5bc2.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 89,
          "base64": "https://s13emagst.akamaized.net/products/28915/28914304/images/res_b702af51f79c60d07c5821c65338022c.jpg",
          "uploadedAt": "2022-04-12"
        }
      ]
    },
    {
      "id": 12,
      "title": "Lenovo 300 Wireless Mouse, Black",
      "description": "A good and classic Wireless mouse with a nice design.",
      "price": 49.99,
      "rating": 4.75,
      "categoryId": 12,
      "characteristics": [
        {
          "value": {
            "id": 65,
            "title": "Standard"
          },
          "characteristic": {
            "id": 57,
            "title": "Type"
          }
        },
        {
          "value": {
            "id": 66,
            "title": "1000"
          },
          "characteristic": {
            "id": 58,
            "title": "Resolution (dpi)"
          }
        },
        {
          "value": {
            "id": 67,
            "title": "3"
          },
          "characteristic": {
            "id": 59,
            "title": "Buttons / wheels"
          }
        },
        {
          "value": {
            "id": 68,
            "title": "Wireless"
          },
          "characteristic": {
            "id": 60,
            "title": "Mouse interface"
          }
        }
      ],
      "files": [
        {
          "id": 45,
          "base64": "https://s13emagst.akamaized.net/products/3911/3910245/images/res_e3efa74a0e1a95bcee136a02a69329d7.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 46,
          "base64": "https://s13emagst.akamaized.net/products/3911/3910245/images/res_bf15b614ca829dd8cdd3b00b4a737c40.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 47,
          "base64": "https://s13emagst.akamaized.net/products/3911/3910245/images/res_1958e0604d5207840649d2454cdc5d0d.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 48,
          "base64": "https://s13emagst.akamaized.net/products/3911/3910245/images/res_3845b8b8eee17d4c7c8c027d736a1b0e.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 49,
          "base64": "https://s13emagst.akamaized.net/products/3911/3910245/images/res_230ef1d4a0ada489abdd370f5a0c836b.jpg",
          "uploadedAt": "2022-04-12"
        }
      ]
    },
    {
      "id": 20,
      "title": "ASUS TUF Gaming M3 Gaming Mouse, RGB, 7000 dpi, 7 Buttons, Aura Sync Lighting, Black",
      "description": "TUF Gaming M3 is a compact gaming mouse that offers the comfort, performance and reliability required by gamers. It is an ergonomic and lightweight mouse.",
      "price": 74.99,
      "rating": 4.84,
      "categoryId": 12,
      "characteristics": [
        {
          "value": {
            "id": 8,
            "title": "Gaming"
          },
          "characteristic": {
            "id": 57,
            "title": "Type"
          }
        },
        {
          "value": {
            "id": 80,
            "title": "7000"
          },
          "characteristic": {
            "id": 58,
            "title": "Resolution (dpi)"
          }
        },
        {
          "value": {
            "id": 81,
            "title": "6/1"
          },
          "characteristic": {
            "id": 59,
            "title": "Buttons / wheels"
          }
        },
        {
          "value": {
            "id": 54,
            "title": "USB"
          },
          "characteristic": {
            "id": 48,
            "title": "Interface"
          }
        }
      ],
      "files": [
        {
          "id": 75,
          "base64": "https://s13emagst.akamaized.net/products/29523/29522320/images/res_d71cfa7b7bc79f6ce1ebf932fd6d32d8.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 76,
          "base64": "https://s13emagst.akamaized.net/products/29523/29522320/images/res_6459e08452fb2652c644f97217288966.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 77,
          "base64": "https://s13emagst.akamaized.net/products/29523/29522320/images/res_e1f4ea0097ba2558fb47e521f1b0bb42.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 78,
          "base64": "https://s13emagst.akamaized.net/products/29523/29522320/images/res_ad8275a597fd1c09052b9d753f270731.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 79,
          "base64": "https://s13emagst.akamaized.net/products/29523/29522320/images/res_4819d3d8d00f339cfd7a7f518b965432.jpg",
          "uploadedAt": "2022-04-12"
        }
      ]
    },
    {
      "id": 14,
      "title": "Gaming Mouse Razer DeathAdder Essential 2021, Black",
      "description": "For more than a decade, the Razer DeathAdder line has been a fulcrum in the global export arena. It has earned a reputation for reliability that players swear by its proven durability and ergonomics.",
      "price": 79.99,
      "rating": 4.61,
      "categoryId": 12,
      "characteristics": [
        {
          "value": {
            "id": 8,
            "title": "Gaming"
          },
          "characteristic": {
            "id": 57,
            "title": "Type"
          }
        },
        {
          "value": {
            "id": 71,
            "title": "6400"
          },
          "characteristic": {
            "id": 58,
            "title": "Resolution (dpi)"
          }
        },
        {
          "value": {
            "id": 72,
            "title": "5"
          },
          "characteristic": {
            "id": 59,
            "title": "Buttons / wheels"
          }
        },
        {
          "value": {
            "id": 54,
            "title": "USB"
          },
          "characteristic": {
            "id": 48,
            "title": "Interface"
          }
        }
      ],
      "files": [
        {
          "id": 55,
          "base64": "https://s13emagst.akamaized.net/products/38936/38935444/images/res_8863f63179a85ea762132b81779ae90f.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 56,
          "base64": "https://s13emagst.akamaized.net/products/38936/38935444/images/res_953cba69883437ca14fbecaa88462828.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 57,
          "base64": "https://s13emagst.akamaized.net/products/38936/38935444/images/res_6bd139fcbf875a76a0b8125fa2964a97.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 58,
          "base64": "https://s13emagst.akamaized.net/products/38936/38935444/images/res_3eadf72c4070c5a3c700fc40861d62f4.jpg",
          "uploadedAt": "2022-04-12"
        }
      ]
    },
    {
      "id": 16,
      "title": "Logitech G102 Lightsync gaming mouse, 8000 dpi, RGB, White",
      "description": "The sensor specially designed for gaming responds precisely to your every move. Customize the settings to reach the sensitivity you want with the Logitech G HUB software!",
      "price": 89.39,
      "rating": 4.75,
      "categoryId": 12,
      "characteristics": [
        {
          "value": {
            "id": 8,
            "title": "Gaming"
          },
          "characteristic": {
            "id": 57,
            "title": "Type"
          }
        },
        {
          "value": {
            "id": 75,
            "title": "8000"
          },
          "characteristic": {
            "id": 58,
            "title": "Resolution (dpi)"
          }
        },
        {
          "value": {
            "id": 76,
            "title": "6"
          },
          "characteristic": {
            "id": 59,
            "title": "Buttons / wheels"
          }
        },
        {
          "value": {
            "id": 54,
            "title": "USB"
          },
          "characteristic": {
            "id": 48,
            "title": "Interface"
          }
        }
      ],
      "files": [
        {
          "id": 60,
          "base64": "https://s13emagst.akamaized.net/products/30421/30420855/images/res_098231859c48fe84fb6fabd0887094c0.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 61,
          "base64": "https://s13emagst.akamaized.net/products/31697/31696521/images/res_ea75ebae105fb310c7c2a75ddb66c042.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 62,
          "base64": "https://s13emagst.akamaized.net/products/31697/31696521/images/res_67e09355be09aedda90e474f34b370d7.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 63,
          "base64": "https://s13emagst.akamaized.net/products/3911/3910245/images/res_e3efa74a0e1a95bcee136a02a69329d7.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 64,
          "base64": "https://s13emagst.akamaized.net/products/31697/31696521/images/res_6a7c7e2baeafdca0bd7d0e9bfeb8aa94.jpg",
          "uploadedAt": "2022-04-12"
        }
      ]
    },
    {
      "id": 28,
      "title": "Microphone streaming Trust Mantis GXT 232",
      "description": "With the Trust GXT 232 Mantis streaming microphone, you can discuss your game strategy, ask for reinforcements, or have fun together. With this microphone you will always be connected with your team during crucial battles.",
      "price": 89.99,
      "rating": 4.4,
      "categoryId": 18,
      "characteristics": [
        {
          "value": {
            "id": 96,
            "title": "Condenser"
          },
          "characteristic": {
            "id": 57,
            "title": "Type"
          }
        },
        {
          "value": {
            "id": 93,
            "title": "Wired"
          },
          "characteristic": {
            "id": 75,
            "title": "Connection type"
          }
        },
        {
          "value": {
            "id": 97,
            "title": "Digital"
          },
          "characteristic": {
            "id": 76,
            "title": "Transmission type"
          }
        },
        {
          "value": {
            "id": 54,
            "title": "USB"
          },
          "characteristic": {
            "id": 48,
            "title": "Interface"
          }
        }
      ],
      "files": [
        {
          "id": 108,
          "base64": "https://s13emagst.akamaized.net/products/15234/15233046/images/res_912b9454e2687777242c4986d3236cba.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 109,
          "base64": "https://s13emagst.akamaized.net/products/15234/15233046/images/res_3d2584432544129463515669c8311dbb.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 110,
          "base64": "https://s13emagst.akamaized.net/products/15234/15233046/images/res_50d2bb7643f9bc06fe33572e19b339af.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 111,
          "base64": "https://s13emagst.akamaized.net/products/15234/15233046/images/res_2ae5ba3a90899d926d18eccc71135438.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 112,
          "base64": "https://s13emagst.akamaized.net/products/15234/15233046/images/res_2891c6fef3a3ce50d1ff8805f0f7014b.jpg",
          "uploadedAt": "2022-04-12"
        }
      ]
    },
    {
      "id": 19,
      "title": "SteelSeries Rival 3 gaming mouse, Black",
      "description": "Designed by PixArt and SteelSeries for accurate performance with real 1-to-1 detection, so that mouse movements are perfectly rendered on the monitor.",
      "price": 119.99,
      "rating": 4.62,
      "categoryId": 12,
      "characteristics": [
        {
          "value": {
            "id": 8,
            "title": "Gaming"
          },
          "characteristic": {
            "id": 57,
            "title": "Type"
          }
        },
        {
          "value": {
            "id": 79,
            "title": "100 - 8500"
          },
          "characteristic": {
            "id": 58,
            "title": "Resolution (dpi)"
          }
        },
        {
          "value": {
            "id": 76,
            "title": "6"
          },
          "characteristic": {
            "id": 59,
            "title": "Buttons / wheels"
          }
        },
        {
          "value": {
            "id": 54,
            "title": "USB"
          },
          "characteristic": {
            "id": 48,
            "title": "Interface"
          }
        }
      ],
      "files": [
        {
          "id": 71,
          "base64": "https://s13emagst.akamaized.net/products/28572/28571979/images/res_2650eba4ed20e2e3f05c06b1d7379318.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 72,
          "base64": "https://s13emagst.akamaized.net/products/28572/28571979/images/res_3a46cb292747e38f0223b3d78189dbc7.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 73,
          "base64": "https://s13emagst.akamaized.net/products/28572/28571979/images/res_9070fa2de9f0528cdfd56433ad475e6c.jpg",
          "uploadedAt": "2022-04-12"
        },
        {
          "id": 74,
          "base64": "https://s13emagst.akamaized.net/products/28572/28571979/images/res_24277ff05af6cbb0c7e758aa62d309d7.jpg",
          "uploadedAt": "2022-04-12"
        }
      ]
    }
  ]
};

const ShoppingCart = () => {
  console.log(data)

  return (
  <div>
    <Filters/>
    <div className="stock-container">
      {data.data.map((product) => {
        //console.log(product) //image, name, ratings, price
        return (//files[0].base64
           <SingleProduct product = {product}/>
        );
      })}
    </div>
  </div>
);
}

export default ShoppingCart
