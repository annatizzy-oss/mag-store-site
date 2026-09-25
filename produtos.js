// MAG STORE - Base de dados dos produtos
// Base extraída do index.html atual da MAG STORE.

const produtosMAG = [
  { id:"produto-001", nome:"Kit 12 Potes Herméticos Electrolux", imagem:"imagens/produto-002.jpg", linkAfiliado:"https://meli.la/2xoPQxH" },
  { id:"produto-002", nome:"True Source Cúrcuma Biomax Lipossomal 60 Cápsulas", imagem:"imagens/produto-003.png", linkAfiliado:"https://meli.la/2f93LiX" },
  { id:"produto-003", nome:"Magnésio Elemental True Source – 60 Cápsulas", imagem:"imagens/produto-004.jpg", linkAfiliado:"https://meli.la/1WC9ezR" },
  { id:"produto-004", nome:"True NAC – 30 Cápsulas True Source", imagem:"imagens/produto-005.jpg", linkAfiliado:"https://meli.la/1zTZhdb" },

  { id:"iron-plus", nome:"Iron Plus True Source – Ferro em Gotas 30 ml", imagem:"imagens/produto-006.png", linkAfiliado:"https://meli.la/1Aq2VdL" },
  { id:"produto-006", nome:"Vitamina D True Source Sabor Framboesa – 30 ml", imagem:"imagens/produto-007.png", linkAfiliado:"https://meli.la/23pAhRD" },
  { id:"produto-007", nome:"Lenços Umedecidos Pampers – 192 Unidades", imagem:"imagens/produto-008.png", linkAfiliado:"https://meli.la/1LFi1Bf" },
  { id:"produto-008", nome:"Kit 3 Tigelas Electrolux em Aço Inox com Tampa", imagem:"imagens/produto-009.jpg", linkAfiliado:"https://meli.la/2G1Dq8t" },

  { id:"ferro-yosen", nome:"Ferro Yosen Ydrosolv – 30 ml", imagem:"imagens/produto-010.webp", linkAfiliado:"https://meli.la/2PMrzHd" },
  { id:"vitamina-d-yosen", nome:"Vitamina D3 Yosen Ydrosolv – 30 ml", imagem:"imagens/produto-011.webp", linkAfiliado:"https://meli.la/1aR5rs2" },
  { id:"vitamina-b12-yosen", nome:"Vitamina B12 Yosen Ydrosolv – 30 ml", imagem:"imagens/produto-012.webp", linkAfiliado:"https://meli.la/2bGJe7E" },

  { id:"eletro-01", nome:"Espremedor de Frutas Mondial", imagem:"imagens/produto-013.webp", linkAfiliado:"https://meli.la/14gaMF4" },
  { id:"eletro-02", nome:"Grill / Chapa Elétrica Cadence SAN400 Click", imagem:"imagens/produto-014.webp", linkAfiliado:"https://meli.la/2bkqetw" },
  { id:"eletro-03", nome:"Forno Elétrico BAK 10L de Bancada", imagem:"imagens/produto-015.webp", linkAfiliado:"https://meli.la/32KiZg1" },
  { id:"eletro-04", nome:"Cooktop de Indução Britânia", imagem:"imagens/produto-016.webp", linkAfiliado:"https://meli.la/1qR43NG" },
  { id:"eletro-05", nome:"Panela de Pressão Elétrica Electrolux Experience Digital PCC20 6L", imagem:"imagens/produto-017.webp", linkAfiliado:"https://meli.la/24CqrTP" },
  { id:"eletro-06", nome:"Multiprocessador Turbo Chef 5 em 1 Mondial MPN-01-R", imagem:"imagens/produto-018.webp", linkAfiliado:"https://meli.la/23y1dvM" },
  { id:"eletro-07", nome:"Limpador a Vapor WAP com Acessórios", imagem:"imagens/produto-019.webp", linkAfiliado:"https://meli.la/1kZ16pw" },
  { id:"eletro-08", nome:"Aspirador Automotivo 12V", imagem:"imagens/produto-020.webp", linkAfiliado:"https://meli.la/1HFAcXi" },
  { id:"eletro-09", nome:"Waffle Maker Mondial GW-01 1200W", imagem:"imagens/produto-021.webp", linkAfiliado:"https://meli.la/1imb7wo" },
  { id:"eletro-10", nome:"Sanduicheira / Grill", imagem:"imagens/produto-022.webp", linkAfiliado:"https://meli.la/2CTkoQW" },
  { id:"eletro-11", nome:"WAP Spot Cleaner", imagem:"imagens/produto-023.webp", linkAfiliado:"https://meli.la/2rfGEMp" },
  { id:"eletro-12", nome:"Panela Elétrica Electrolux", imagem:"imagens/produto-024.webp", linkAfiliado:"https://meli.la/1i9gP2t" },
  { id:"eletro-13", nome:"Aspirador Vertical / Portátil WAP", imagem:"imagens/produto-025.webp", linkAfiliado:"https://meli.la/1fbJVG8" },
  { id:"eletro-14", nome:"Balança Digital de Cozinha Inox 10 kg", imagem:"imagens/produto-026.webp", linkAfiliado:"https://meli.la/1hkLkPq" },
  { id:"eletro-15", nome:"Forno / Air Fryer Oster French Door 2 em 1 42L", imagem:"imagens/produto-027.webp", linkAfiliado:"https://meli.la/2jXgDe4" },
  { id:"eletro-16", nome:"Liquidificador Oster Power", imagem:"imagens/produto-028.webp", linkAfiliado:"https://meli.la/2xnbqgW" },
  { id:"eletro-17", nome:"Torradeira Electrolux", imagem:"imagens/produto-029.webp", linkAfiliado:"https://meli.la/2wa2AaZ" },
  { id:"eletro-18", nome:"Omeleteira Mondial Easy Omelet", imagem:"imagens/produto-030.webp", linkAfiliado:"https://meli.la/1GUPkWp" },
  { id:"eletro-19", nome:"Batedeira Mondial Bella Massa Inox", imagem:"imagens/produto-031.webp", linkAfiliado:"https://meli.la/2HobF2b" },
  { id:"eletro-20", nome:"Vaporizador de Roupas Portátil", imagem:"imagens/produto-032.webp", linkAfiliado:"https://meli.la/2qjdm8P" },
  { id:"eletro-21", nome:"Forno de Embutir Elétrico Philco", imagem:"imagens/produto-033.webp", linkAfiliado:"https://meli.la/1XeDeJJ" },
  { id:"eletro-22", nome:"Máquina de Pão Mondial Master Bread", imagem:"imagens/produto-034.webp", linkAfiliado:"https://meli.la/2wFvwgC" },
  { id:"eletro-23", nome:"Mini Processador Mallory New Oggi", imagem:"imagens/produto-035.webp", linkAfiliado:"https://meli.la/1bHgU89" },
  { id:"eletro-24", nome:"Mini Máquina Elétrica para Bolos", imagem:"imagens/produto-036.webp", linkAfiliado:"https://meli.la/23kBN26" },
  { id:"eletro-25", nome:"Liquidificador Oster Power 1400W", imagem:"imagens/produto-037.webp", linkAfiliado:"https://meli.la/1xCHeRH" },
  { id:"eletro-26", nome:"Mixer Elgin Turbo Chef 3 em 1", imagem:"imagens/produto-038.webp", linkAfiliado:"https://meli.la/2qhQuvk" },
  { id:"eletro-27", nome:"Seladora a Vácuo Profissional Casa Catharina", imagem:"imagens/produto-039.webp", linkAfiliado:"https://meli.la/2QVY3iB" },
  { id:"eletro-28", nome:"Espremedor Mondial Turbo Citrus", imagem:"imagens/produto-040.webp", linkAfiliado:"https://meli.la/31w1y8v" },
  { id:"eletro-29", nome:"Batedeira Planetária Mondial 700W", imagem:"imagens/produto-041.webp", linkAfiliado:"https://meli.la/1WdUqCE" },
  { id:"eletro-30", nome:"Panela de Pressão Elétrica Electrolux Efficient PCE20 5L", imagem:"imagens/produto-042.webp", linkAfiliado:"https://meli.la/2vvqRUM" },
  { id:"eletro-31", nome:"Liquidificador / Multiprocessador 1700W", imagem:"imagens/produto-043.webp", linkAfiliado:"https://meli.la/2m96t89" },
  { id:"eletro-32", nome:"Máquina de Gelo EOS", imagem:"imagens/produto-044.webp", linkAfiliado:"https://meli.la/1KwWP8Y" },
  { id:"eletro-33", nome:"Panela Elétrica de Arroz Mondial PE-45-6X 500W", imagem:"imagens/produto-045.webp", linkAfiliado:"https://meli.la/12ZycV7" },
  { id:"eletro-34", nome:"Forno Elétrico Oster 45L Grafite", imagem:"imagens/produto-046.webp", linkAfiliado:"https://meli.la/2xAK6Xc" },
  { id:"eletro-35", nome:"Máquina de Gelo Compacta", imagem:"imagens/produto-047.webp", linkAfiliado:"https://meli.la/2ibn78S" },
  { id:"eletro-36", nome:"Liquidificador Philips Walita ProBlend 6", imagem:"imagens/produto-048.webp", linkAfiliado:"https://meli.la/1nGKtpz" },
  { id:"eletro-37", nome:"Limpador a Vapor Portátil com Acessórios", imagem:"imagens/produto-049.webp", linkAfiliado:"https://meli.la/2hsZkaZ" },
  { id:"eletro-38", nome:"Sanduicheira Mondial Master Grill Inox", imagem:"imagens/produto-050.webp", linkAfiliado:"https://meli.la/1a8aUjp" },
{
  id: "eletro-39",
  nome: "Chaleira Elétrica Electrolux",
  imagem: "imagens/produto-051.webp",
  linkAfiliado: "https://meli.la/21SQfiU"
},
{
  id: "eletro-40",
  nome: "Máquina de Cupcake Britânia Maker",
  imagem: "imagens/produto-052.webp",
  linkAfiliado: "https://meli.la/1guigCZ"
}
// ===== MAG STORE — SINCRONIZAÇÃO AUTOMÁTICA DOS CARDS =====

document.addEventListener("DOMContentLoaded", function () {
  if (!Array.isArray(produtosMAG)) {
    console.error("MAG STORE: produtosMAG não foi carregado.");
    return;
  }

  produtosMAG.forEach(function (produto) {
    const card = document.querySelector(
      '.produto[data-mag="' + produto.id + '"]'
    );

    if (!card) return;

    const imagem = card.querySelector(".produto-foto img");
    const nome = card.querySelector(".produto-nome");
    const botao = card.querySelector(".botao-produto");

    if (imagem && produto.imagem) {
      imagem.src = produto.imagem;
      imagem.alt = produto.nome || "Produto MAG STORE";
    }

    if (nome && produto.nome) {
      nome.textContent = produto.nome;
    }

    if (botao && produto.linkAfiliado) {
      botao.href = produto.linkAfiliado;
      botao.target = "_blank";
      botao.rel = "noopener noreferrer sponsored";
    }
  });

  console.log(
    "MAG STORE: sincronização concluída —",
    produtosMAG.length,
    "produtos cadastrados."
  );
});

