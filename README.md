# Project for AvtoZip frontend website

## Badges

[![Circle CI](https://circleci.com/gh/AvtoZip/app-avtozip.svg?style=shield)](https://circleci.com/gh/AvtoZip/app-avtozip)

## Component Stack

+ **General**

   | Component | Version |
   |:---|:---:|
   | Node | 3.5 |
   | npm | 1.9 |
   | WebPack | 1.12 |
   | bootstrap | 3.3 |
   | angular | | 1.5 |
   | angular-route | | 1.5 |
   | jquery | | 2.2 |

   
+ **Loaders**

   | Component | Version |
   |:---|:---:|
   | css-loader | 0.23 |
   | style-loader | 0.13 |

+ **Plugins**

   | Component | Version |
   |:---|:---:|
   | extract-text-webpack-plugin | 1.0 |
   | html-webpack-plugin | 2.15 |

+ **Development**

   | Component | Version |
   |:---|:---:|
   | webpack-dev-server | 1.12 |


## Installation instructions

1. **Preparation:**

1. **Configure Node's virtual environment (NodeEnv):**

   - *Installation (All platforms):*

      `pip install nodeenv`

   - *Creation of project's environment:*

      `nodeenv --node=5.9.1 --npm=3.7.3 env` inside your project's root folder

   - *Activating virtual environment:*

      `. env/bin/activate` or `source env/bin/activate`

1. **Build and install packages:**

   - *Makefile:*

      `make` inside project's root

1. **Run webpack development server:**

   `make devserver`
