let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1, 
        name: 'Samsung Galaxy A04', 
        price: 710, 
        description: {
            Sistema: [' Android 12 Samsung One UI 4.1'] ,
            Processador: ['4x 2.3 GHz Cortex-A53 + 4x 1.8 GHz Cortex-A53'],
            Ram: ['4 GB'],
            Tela: ['6.5 polegadas'],
            Resolução: ['720 x 1600 pixel'],
            Câmera: ['50 Mp + F 2.4'],
            }, 
        image: 'img/dispositivos/celular/galaxya04.png',
        nature: {
            categoria: 'basico',
            marca: 'samsung',
            type: 'celular'
            }
    },
    {
        id: 2, 
        name: 'Samsung Galaxy A05', 
        price: 699, 
        description: {
            Sistema: [' Android 13'] ,
            Processador: ['2x 2.0 GHz Cortex-A75 + 6x 1.8 GHz Cortex-A55'],
            Ram: ['4 GB'],
            Memória: [' 128 GB'],
            Tela: ['6.7 polegadas'],
            Resolução: ['720 x 1600 pixel'],
            Câmera: ['50 Mp + 2 Mp'],
            }, 
        image: './img/dispositivos/celular/galaxya05.png',
        nature: {
            categoria: 'basico',
            marca: 'samsung',
            type: 'celular'
        }
    },
    {
        id: 3, 
        name: 'Xiaomi Redmi A2', 
        price: 720, 
        description: {
            Sistema: ['Android 12 (Go Edition) MIUI'] ,
            Processador: [' 4x 2.2 GHz Cortex-A53 + 4x 1.7 GHz Cortex-A53'],
            Ram: ['2 GB'],
            Memória: [' 32 GB'],
            Tela: ['6.52 polegadas'],
            Resolução: ['720 x 1600 pixel'],
            Câmera: ['8 Mp + 0.08 Mp'],
            }, 
        image: './img/dispositivos/celular/redmia2.png',
        nature: {
            categoria: 'basico',
            marca: 'xiaomi',
            type: 'celular'
        }
    },
    {
        id: 4, 
        name: 'Xiaomi Redmi 12C', 
        price: 720, 
        description: {
            Sistema: [' Android MIUI 13'] ,
            Processador: ['2x 2.0 GHz Cortex-A75 + 6x 1.8 GHz Cortex-A55'],
            Ram: ['4 GB'],
            Memória: [' 128 GB'],
            Tela: ['6.71 polegadas'],
            Resolução: ['720 x 1600 pixel'],
            Câmera: ['50 Mp + 0.08 Mp'],
            }, 
        image: './img/dispositivos/celular/redmi12c.png',
        nature: {
            categoria: 'basico',
            marca: 'xiaomi',
            type: 'celular'
        }
    },
    {
        id: 5, 
        name: 'Motorola Moto E13', 
        price: 734, 
        description: {
            Sistema: [' Android 13 (Go Edition) MyUX'] ,
            Processador: ['2x 1.6 GHz Cortex-A75 + 6x 1.6 GHz Cortex-A55'],
            Ram: ['2 GB'],
            Memória: ['32 GB'],
            Tela: ['6.5 polegadas'],
            Resolução: ['720 x 1600 pixel'],
            Câmera: ['13 Mp'],
            }, 
        image: './img/dispositivos/celular/motoe13.png',
        nature: {
            categoria: 'basico',
            marca: 'motorola',
            type: 'celular'
        }
    },
    {
        id: 6, 
        name: 'Motorola Moto E22i', 
        price: 719, 
        description: {
            Sistema: ['Android 12 (Go Edition) MyUX'] ,
            Processador: [' 4x 2.3 GHz Cortex-A53 + 4x 1.8 GHz Cortex-A53'],
            Ram: ['2 GB'],
            Memória: [' 32 GB'],
            Tela: ['6.5 polegadas'],
            Resolução: ['720 x 1600 pixel'],
            Câmera: ['16 Mp + 2 Mp'],
            }, 
        image: './img/dispositivos/celular/motoe22i.png',
        nature: {
            categoria: 'basico',
            marca: 'motorola',
            type: 'celular'
        }
    },
    {
        id: 7, 
        name: 'Realme C33', 
        price: 850, 
        description: {
            Sistema: ['Android 12 (Go Edition) MyUX'] ,
            Processador: ['4x 2.3 GHz Cortex-A53 + 4x 1.8 GHz Cortex-A53'],
            Ram: ['2 GB'],
            Memória: ['32 GB'],
            Tela: ['6.5 polegadas'],
            Resolução: ['720 x 1600 pixel'],
            Câmera: ['16 Mp + 2 Mp'],
            }, 
        image: './img/dispositivos/celular/realmec33.png',
        nature: {
            categoria: 'basico',
            marca: 'realme',
            type: 'celular'
        }
    },    
    {
        id: 8, 
        name: 'Realme Narzo 50i', 
        price: 645, 
        description: {
            Sistema: ['Android 11 (Go Edition) Realme UI 2.0'] ,
            Processador: ['4x 1.6 Ghz Cortex-A55 + 4x 1.2 GHz Cortex-A55'],
            Ram: ['2 GB'],
            Memória: ['32 GB'],
            Tela: ['6.5 polegadas'],
            Resolução: ['720 x 1600 pixel'],
            Câmera: [' 8 Mp'],
            }, 
        image: './img/dispositivos/celular/realmenarzo.png',
        nature: {
            categoria: 'basico',
            marca: 'realme',
            type: 'celular'
        }
    },    
    {
        id: 9, 
        name: 'Samsung Galaxy A34', 
        price: 1259, 
        description: {
            Sistema: ['Android 13 Samsung One UI 5.1'] ,
            Processador: ['2x 2.6 GHz Cortex-A78 + 6x 2.0 GHz Cortex-A55'],
            Ram: ['6 GB'],
            Memória: ['128 GB'],
            Tela: ['6.6 polegadas'],
            Resolução: ['1080 x 2340 pixel'],
            Câmera: ['48 Mp + 8 Mp + 5 Mp'],
            }, 
        image: './img/dispositivos/celular/galaxya34.png',
        nature: {
            categoria: 'intermediario',
            marca: 'samsung',
            type: 'celular'
        }
    },
    {
        id: 10, 
        name: 'Samsung Galaxy A54', 
        price: 1729, 
        description: {
            Sistema: ['Android 13 Samsung One UI 5.1'] ,
            Processador: ['4x 2.4 GHz Cortex-A78 + 4x 2.0 GHz Cortex-A55'],
            Ram: ['8 GB'],
            Memória: ['256 GB'],
            Tela: ['6.4 polegadas'],
            Resolução: ['1080 x 2340 pixel'],
            Câmera: ['50 Mp + 12 Mp + 5 Mp'],
            }, 
        image: './img/dispositivos/celular/galaxya54.png',
        nature: {
            categoria: 'intermediario',
            marca: 'samsung',
            type: 'celular'
        }
    },
    {
        id: 11, 
        name: 'Xiaomi Redmi Note 12', 
        price: 989, 
        description: {
            Sistema: ['Android 12 MIUI 13'] ,
            Processador: ['2x 2.0 GHz Cortex-A78 + 6x 1.8 GHz Cortex-A55'],
            Ram: ['4 GB'],
            Memória: ['128 GB'],
            Tela: ['6.67 polegadas'],
            Resolução: ['1080 x 2400 pixel'],
            Câmera: ['48 Mp + 8 Mp + 2 Mp'],
            }, 
        image: './img/dispositivos/celular/redminote12.png',
        nature: {
            categoria: 'intermediario',
            marca: 'xiaomi',
            type: 'celular'
        }
    },
    {
        id: 12, 
        name: 'Xiaomi Redmi Note 12 Pro', 
        price: 1259, 
        description: {
            Sistema: [''] ,
            Processador: [''],
            Ram: ['GB'],
            Memória: ['GB'],
            Tela: ['polegadas'],
            Resolução: ['pixel'],
            Câmera: [''],
            }, 
        image: './img/dispositivos/celular/redminote12pro.png',
        nature: {
            categoria: 'intermediario',
            marca: 'xiaomi',
            type: 'celular'
        }
    },
    {
        id: 13, 
        name: 'Motorola Moto G53', 
        price: 999, 
        description: {
            Sistema: [' Android 13'] ,
            Processador: [''],
            Ram: ['GB'],
            Memória: [' GB'],
            Tela: ['polegadas'],
            Resolução: ['720 x 1600 pixel'],
            Câmera: ['50 Mp + 2 Mp'],
            }, 
        image: './img/dispositivos/celular/motoG53.png',
        nature: {
            categoria: 'intermediario',
            marca: 'motorola',
            type: 'celular'
        }
    },
    {
        id: 14, 
        name: 'Samsung Galaxy S23 Ultra', 
        price: 4299, 
        description: {
            Sistema: ['Android 13 Samsung One UI 5.1'] ,
            Processador: ['1x 3.36 GHz Cortex-X3 + 2x 2.8 GHz Cortex-A715 + 2x 2.8 GHz '],
            Ram: ['12 GB'],
            Memória: ['1 TB'],
            Tela: ['6.8 polegadas'],
            Resolução: ['1440 x 3088 pixel'],
            Câmera: ['200 Mp + 10 Mp + 10 Mp + 12 Mp'],
            }, 
        image: './img/dispositivos/celular/galaxys23ultra.png',
        nature: {
            categoria: 'avancado',
            marca: 'samsung',
            type: 'celular'
        }
    },
    {
        id: 15, 
        name: 'Samsung Galaxy Z Fold 5', 
        price: 6438, 
        description: {
            Sistema: ['Android 13 Samsung One UI 5.1'] ,
            Processador: ['1x 3.36 GHz Cortex-X3 + 2x 2.8 GHz Cortex-A715 + 2x 2.8 GHz Cortex-A710 + 3x 2.0 GHz Cortex-A510'],
            Ram: ['12 GB'],
            Memória: ['1024 GB'],
            Tela: ['7.6 polegadas'],
            Resolução: [' 1812 x 2176 pixel'],
            Câmera: ['50 Mp + 12 Mp + 10 Mp'],
            }, 
        image: './img/dispositivos/celular/galaxyzfold5.png',
        nature: {
            categoria: 'avancado',
            marca: 'samsung',
            type: 'celular'
        }
    },
    {
        id: 16, 
        name: 'Iphone 15 Pro Max', 
        price: 7990, 
        description: {
            Sistema: ['iOS 17'] ,
            Processador: ['2x 3.78 GHz Everest + 4x 2.11 GHz Sawtooth'],
            Ram: ['8 GB'],
            Memória: ['1024 GB'],
            Tela: ['6.7 polegadas'],
            Resolução: ['1290 x 2796 pixel'],
            Câmera: ['48 Mp + 12 Mp + 12 Mp'],
            }, 
        image: './img/dispositivos/celular/iphone15promax.png',
        nature: {
            categoria: 'avancado',
            marca: 'apple',
            type: 'celular'
        }
    },
    {
        id: 17, 
        name: 'Iphone 15', 
        price: 4548, 
        description: {
            Sistema: ['iOS 17'] ,
            Processador: ['2x 3.46 GHz Everest + 4x 2.02 GHz Sawtooth'],
            Ram: ['6 GB'],
            Memória: ['512 GB'],
            Tela: ['6.1 polegadas'],
            Resolução: ['1179 x 2556 pixel'],
            Câmera: ['48 Mp + 12 Mp'],
            }, 
        image: './img/dispositivos/celular/iphone15.png',
        nature: {
            categoria: 'avancado',
            marca: 'apple',
            type: 'celular'
        }
    },
    {
        id: 18, 
        name: 'Acer Aspire 3', 
        price: 2897, 
        description: {
            Sistema: ['Windows 11 Home'] ,
            Processador: [' Intel® Core™ i3– N305 Série N'],
            Ram: ['8 GB RAM LPDDR5'],
            Tela: [' 15.6” Full HD (1920 x 1080)'],
            Resolução: ['HD (1366 x 768 pixels)’'],
            }, 
        extraDescription: {
            Gráfico: [ ' Intel® UHD (integrado)'],
            Expansão: ['Possibilidade de expansão da memória em até 16 GB e placa de vídeo Intel UHD Graphics.'],
        },
        image: './img/dispositivos/notebook/AcerAspire3.png',
        nature: {
            categoria: 'basico',
            marca: 'acer',
            type: 'notebook'
        }
    },
    {
        id: 19, 
        name: 'HP Stream 14',
        price: 2526, 
        description: {
            Sistema: [' Windows 10 ou Windows 11 (versão S)'] ,
            Processador: [' Intel Celeron ou AMD'],
            Ram: ['4 GB de RAM (soldada)'],
            Tela: ['14 polegadas com painel LED'],
            Resolução: ['HD (1366 x 768) ou, em alguns modelos, HD+ (1600 x 900)'],
            }, 
        extraDescription: {
            Gráfico: ['UHD Graphics ou gráficos integrados da AMD'],
            Expansão: ['Não é expansível.'],
        },
        image: './img/dispositivos/notebook/hpstream14.png',
        nature: {
            categoria: 'basico',
            marca: 'hp',
            type: 'notebook'
        }
    },
    {
        id: 20, 
        name: 'Lenovo IdeaPad 1 15" AMD ', 
        price: 2552, 
        description: {
            Sistema: ['Linux '] ,
            Processador: ['AMD Ryzen™ 5 7520U (2,80 GHz até 4,30 GHz) '],
            Ram: ['8 GB LPDDR5-5.500MHz (Soldado) '],
            Tela: ['15,6" HD (1366 x 768), TN, antirreflexo, sem toque, 45% NTSC, 220 nits, 60 Hz '],
            Resolução: [' HD (1366x768) Antirreflexo'],
            }, 
        extraDescription: {
            Gráfico: [ 'AMD Radeon™ 610M integrada  '],
            Expansão: ['Normalmente, é possível substituir ou adicionar um SSD M.2, mas isso varia entre as configurações.'],
        },
        image: './img/dispositivos/notebook/LenovoIdeaPad1.png',
        nature: {
            categoria: 'basico',
            marca: 'lenovo',
            type: 'notebook'
        }
    },
    {
        id: 21, 
        name: 'Samsung Chromebook 4 ', 
        price: 1731, 
        description: {
            Sistema: ['Chrome OS '] ,
            Processador: [' Processador Intel® Celeron® N4020 (1.10 Ghz até 2.70 Ghz 4 MB L2 Cache)'],
            Ram: ['4 GB LPDDR4 (On BD 4 GB) '],
            Tela: ['HD LED de 11.6” (1366 x 768), antirreflexiva '],
            Resolução: [' 1366 x 768 Pixels'],
            }, 
        extraDescription: {
            Gráfico: [ ' Intel® UHD Graphics 600 '],
            Expansão: ['O modelo vem com um armazenamento eMMC que é soldado. Isso significa que você não pode substituir ou expandir o armazenamento interno. '],
        },
        image: './img/dispositivos/notebook/SamsungChromebook4.png',
        nature: {
            categoria: 'basico',
            marca: 'samsung',
            type: 'notebook'
        }
    },
    {
        id: 22, 
        name: 'Asus VivoBook 15 ', 
        price: 2129, 
        description: {
            Sistema: [' KeepOS '] ,
            Processador: ['Intel® Core i5 1235U 3,3 GHz, 12 MB Cache '],
            Ram: ['4 GB '],
            Tela: ['15,60" LED-backlit Anti-Glare (1920x1080) '],
            Resolução: [' Full HD (1920 x 1080)'],
            }, 
        extraDescription: {
            Gráfico: [ ' Intel® UHD Graphics '],
            Expansão: ['Slot M.2 para um SSD adicional.'],
        },
        image: './img/dispositivos/notebook/AsusVivoBook15.png',
        nature: {
            categoria: 'basico',
            marca: 'asus',
            type: 'notebook'
        }
    },
    {
        id: 23, 
        name: 'Dell Inspiron 15 3000 ', 
        price: 2899, 
        description: {
            Sistema: [' Windows 10 Home'] ,
            Processador: ['Intel Core i3 ou i5 da 11ª geração '],
            Ram: ['8 GB (expansível até 16 GB) '],
            Tela: ['15,6 polegadas, LED '],
            Resolução: [' 1920 x 1080 (Full HD)'],
            }, 
        extraDescription: {
            Gráfico: [ 'Intel UHD Graphics '],
            Expansão: ['Possui um slot M.2 para SSD e um espaço para HDD, permitindo adição de mais armazenamento.'],
        },
        image: './img/dispositivos/notebook/DellInspiron15.png',
        nature: {
            categoria: 'intermediario',
            marca: 'dell',
            type: 'notebook'
        }
    },
    {
        id: 24, 
        name: 'Acer Swift 3 ', 
        price: 3649, 
        description: {
            Sistema: ['Windows 10 Home '] ,
            Processador: [' Intel Core i5 ou i7 da 11ª geração '],
            Ram: [' 8 GB (soldada) '],
            Tela: ['14 polegadas, IPS '],
            Resolução: ['1920 x 1080 (Full HD)’'],
            }, 
        extraDescription: {
            Gráfico: [ 'Intel Iris Xe Graphics '],
            Expansão: ['Possui um slot M.2 para SSD, permitindo a adição de mais armazenamento.'],
        },
        image: './img/dispositivos/notebook/AcerSwift3.png',
        nature: {
            categoria: 'intermediario',
            marca: 'acer',
            type: 'notebook'
        }
    },
    {
        id: 25, 
        name: 'Lenovo IdeaPad Flex 5 ', 
        price: 2639, 
        description: {
            Sistema: ['Windows 10 Home '] ,
            Processador: ['AMD Ryzen 5 ou 7 '],
            Ram: [': 8 GB (soldada) '],
            Tela: ['14 polegadas, touchscreen '],
            Resolução: ['  1920 x 1080 (Full HD)'],
            }, 
        extraDescription: {
            Gráfico: [ ' Gráficos integrados AMD Radeon'],
            Expansão: ['Possui um slot M.2 para SSD, permitindo a adição de mais armazenamento.'],
        },
        image: './img/dispositivos/notebook/LenovoIdeaPadFlex5.png',
        nature: {
            categoria: 'intermediario',
            marca: 'lenovo',
            type: 'notebook'
        }
    },
    {
        id: 26, 
        name: 'Hp Pavilion 15 ', 
        price: 3499, 
        description: {
            Sistema: ['Windows 10 Home '] ,
            Processador: [' Intel Core i5 ou i7 da 11ª geração '],
            Ram: ['8 GB (expansível até 16 GB) '],
            Tela: ['15,6 polegadas, LED '],
            Resolução: [' 1920 x 1080 (Full HD)'],
            }, 
        extraDescription: {
            Gráfico: [ ' Intel Iris Xe Graphics'],
            Expansão: ['Possui um slot M.2 para SSD e um espaço para HDD, permitindo adição de mais armazenamento.'],
        },
        image: './img/dispositivos/notebook/HpPavilion15.png',
        nature: {
            categoria: 'intermediario',
            marca: 'hp',
            type: 'notebook'
        }
    },
    {
        id: 27, 
        name: 'Apple MacBook Pro 16 ', 
        price: 19499, 
        description: {
            Sistema: [' macOS Monterey '] ,
            Processador: [' Apple M1 Pro ou M1 Max '],
            Ram: [' 16 GB ou 32 GB (expansível até 64 GB) '],
            Tela: [' 16,2 polegadas, Liquid Retina XDR '],
            Resolução: [' 3456 x 2234 '],
            }, 
        extraDescription: {
            Gráfico: [ ' Gráficos integrados M1 Pro ou M1 Max'],
            Expansão: ['Possui opções de SSD que podem ser configuradas na compra, mas não são expansíveis após a compra. '],
        },
        image: './img/dispositivos/notebook/AppleMacBookPro16.png',
        nature: {
            categoria: 'avancado',
            marca: 'apple ',
            type: 'notebook'
        }
    },


];

let productFilter = listProducts;
showProduct(productFilter);

function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // Criar um novo produto
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);

        // Adiciona a imagem do produto
        let newImage = document.createElement('img'); 
        newImage.classList.add('image');
        newImage.src = item.image;
        newImage.alt = item.name; 
        newImage.style.width = 'auto'; 
        newImage.style.height = '250px'; 
        newItem.appendChild(newImage);

        // Cria o preço
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = 'R$' + item.price.toLocaleString() + ',00';
        newItem.appendChild(newPrice);

        // Cria o botão
        let newButton = document.createElement('button');
        newButton.innerText = 'Ver mais';
        newButton.classList.add('btn-view');

        // Evento de clique para o botão
        newButton.onclick = function() {
            // Redireciona para a URL na mesma aba
            window.location.href = `PaginaVerMais.php?id=${item.id}`;
        };

        // Adiciona o botão ao item e insere na lista
        newItem.appendChild(newButton);
        list.appendChild(newItem);
    });
}

filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // Dispositivos
        if (valueFilter.dispositivos.value != '') {
            if (item.nature.type != valueFilter.dispositivos.value) {
                return false;
            }
        }
        // Categoria
        if (valueFilter.categoria.value != '') {
            if (!item.nature.categoria.includes(valueFilter.categoria.value)) {
                return false;
            }
        }
        // Marca
        if (valueFilter.marca.value != '') {
            if (!item.nature.marca.includes(valueFilter.marca.value)) {
                return false;
            }
        }
        // Nome
        if (valueFilter.name.value != '') {
            if (!item.name.toLowerCase().includes(valueFilter.name.value.toLowerCase())) {
                return false;
            }
        }
        // Preço minimo
        if (valueFilter.minPrice.value != '') {
            if (item.price < parseFloat(valueFilter.minPrice.value)) {
                return false;
            }
        }
        // Preço maximo
        if (valueFilter.maxPrice.value != '') {
            if (item.price > parseFloat(valueFilter.maxPrice.value)) {
                return false;
            }
        }
        return true;
    });
    showProduct(productFilter);
});


