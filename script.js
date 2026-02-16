const text = "Jovem empreendedor com mais de 5 anos de experiência no mercado. Anteriormente atuava sob o nome Salu Business, atualmente Setamba. No início da minha trajetória, trabalhei com a venda e intermediação de diversos tipos de smartphones. Hoje, sou especializado na venda de iPhones, desde o primeiro modelo até aos lançamentos mais recentes, sempre com garantia e autenticidade comprovadas. Além disso, atuamos também na compra e revenda de viaturas, oferecendo aos nossos clientes soluções flexíveis, como pagamento em prestações e aceitação de outros bens materiais como forma de pagamento. O nosso maior foco é garantir a máxima qualidade em todos os produtos e serviços. Durante muito tempo operámos sem uma loja física. No entanto, no dia 31 de janeiro de 2026, inaugurámos a nossa primeira loja, localizada na Cidade Baixa. O nosso objetivo é crescer, expandir para além do mercado local e implementar serviços de entrega ao domicílio.";
  let i = 0;
  function typing() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 100);
    }
  }
  typing();


