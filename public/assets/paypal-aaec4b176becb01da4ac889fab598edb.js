if("undefined"==typeof PAYPAL||!PAYPAL)var PAYPAL={};PAYPAL.apps=PAYPAL.apps||{},function(e){"use strict";function a(){var a,t,n,o;e.getElementById("paypal-button")||(a="",t=e.createElement("style"),n=".paypal-button",o=n+" button",a+=n+" { white-space: nowrap; }",a+=n+" .field-error {  border: 1px solid #FF0000; }",a+=n+" .hide { display: none; }",a+=n+" .error-box { background: #FFFFFF; border: 1px solid #DADADA; border-radius: 5px; padding: 8px; display: inline-block; }",a+=o+' { white-space: nowrap; overflow: hidden; border-radius: 13px; font-family: "Arial", bold, italic; font-weight: bold; font-style: italic; border: 1px solid #ffa823; color: #0E3168; background: #ffa823; position: relative; text-shadow: 0 1px 0 rgba(255,255,255,.5); cursor: pointer; z-index: 0; }',a+=o+':before { content: " "; position: absolute; width: 100%; height: 100%; border-radius: 11px; top: 0; left: 0; background: #ffa823; background: -webkit-linear-gradient(top, #FFAA00 0%,#FFAA00 80%,#FFF8FC 100%); background: -moz-linear-gradient(top, #FFAA00 0%,#FFAA00 80%,#FFF8FC 100%); background: -ms-linear-gradient(top, #FFAA00 0%,#FFAA00 80%,#FFF8FC 100%); background: linear-gradient(top, #FFAA00 0%,#FFAA00 80%,#FFF8FC 100%); z-index: -2; }',a+=o+':after { content: " "; position: absolute; width: 98%; height: 60%; border-radius: 40px 40px 38px 38px; top: 0; left: 0; background: -webkit-linear-gradient(top, #fefefe 0%, #fed994 100%); background: -moz-linear-gradient(top, #fefefe 0%, #fed994 100%); background: -ms-linear-gradient(top, #fefefe 0%, #fed994 100%); background: linear-gradient(top, #fefefe 0%, #fed994 100%); z-index: -1; -webkit-transform: translateX(1%);-moz-transform: translateX(1%); -ms-transform: translateX(1%); transform: translateX(1%); }',a+=o+".small { padding: 3px 15px; font-size: 12px; }",a+=o+".large { padding: 4px 19px; font-size: 14px; }",t.type="text/css",t.id="paypal-button",t.styleSheet?t.styleSheet.cssText=a:t.appendChild(e.createTextNode(a)),e.getElementsByTagName("head")[0].appendChild(t))}function t(a,t){var o,r,i,u,s,p,m,c,y,h,f,w,g,A,_,v=e.createElement("form"),N=e.createElement("button"),k=e.createElement("input"),F=e.createElement("p"),C=e.createElement("label"),x=e.createElement("input"),P=e.createElement("select"),z=e.createElement("option"),q=a.items,B=[],O={};v.method="post",v.action=l.replace("{env}",a.items.env.value),v.className="paypal-button",v.target="_top";var E=e.createElement("div");E.className="hide",E.id="errorBox",v.appendChild(E),x.type="text",x.className="paypal-input",F.className="paypal-group",C.className="paypal-label",P.className="paypal-select",k.type="hidden",p=q.size&&q.size.value||"large",m=q.lc&&q.lc.value||"en_US",c=b[m]||b.en_US,y=c[t],a.items.text&&(y=a.items.text.value,a.remove("text"));for(s in q)o=q[s],o.hasOptions?B.push(o):o.isEditable?(u=x.cloneNode(!0),u.name=o.key,u.value=o.value,i=C.cloneNode(!0),_=d.config.labels[o.key]||c[o.key]||o.key,i.htmlFor=o.key,i.appendChild(e.createTextNode(_)),i.appendChild(u),r=F.cloneNode(!0),r.appendChild(i),v.appendChild(r)):(u=r=k.cloneNode(!0),u.name=o.key,u.value=o.value,v.appendChild(r));B=n(B);for(s in B)if(o=B[s],B[s].hasOptions){if(O=o.value,O.options.length>1){u=k.cloneNode(!0),u.name="on"+o.displayOrder,u.value=O.label,h=P.cloneNode(!0),h.name="os"+o.displayOrder;for(w in O.options)if(g=O.options[w],"string"==typeof g)f=z.cloneNode(!0),f.value=g,f.appendChild(e.createTextNode(g)),h.appendChild(f);else for(A in g)f=z.cloneNode(!0),f.value=A,f.appendChild(e.createTextNode(g[A])),h.appendChild(f);i=C.cloneNode(!0),_=O.label||o.key,i.htmlFor=o.key,i.appendChild(e.createTextNode(_)),i.appendChild(h),i.appendChild(u)}else i=C.cloneNode(!0),_=O.label||o.key,i.htmlFor=o.key,i.appendChild(e.createTextNode(_)),u=k.cloneNode(!0),u.name="on"+o.displayOrder,u.value=O.label,i.appendChild(u),u=x.cloneNode(!0),u.name="os"+o.displayOrder,u.value=O.options[0]||"",u.setAttribute("data-label",O.label),i.appendChild(u);r=F.cloneNode(!0),r.appendChild(i),v.appendChild(r)}try{N.type="submit"}catch(S){N.setAttribute("type","submit")}return N.className="paypal-button "+p,N.appendChild(e.createTextNode(y)),v.appendChild(N),v}function n(e){return e.sort(function(e,a){return e.displayOrder-a.displayOrder}),e}function o(a,t){var n,o,r=l.replace("{env}",a.items.env.value),i=e.createElement("img"),u=r+"?",d=13,p=a.items;t=t&&t.value||250;for(o in p)n=p[o],u+=n.key+"="+encodeURIComponent(n.value)+"&";return u=encodeURIComponent(u),i.src=s.replace("{env}",a.items.env.value).replace("{url}",u).replace("{pattern}",d).replace("{size}",t),i}function r(e){var a,t,n,o,r,u={},d=[];if(a=e.attributes)for(r=0,o=a.length;o>r;r++)t=a[r],(n=t.name.match(/^data-option([0-9])([a-z]+)([0-9])?/i))?d.push({name:"option."+n[1]+"."+n[2]+(n[3]?"."+n[3]:""),value:t.value}):(n=t.name.match(/^data-([a-z0-9_]+)(-editable)?/i))&&(u[n[1]]={value:t.value,isEditable:!!n[2]});return i(d,u),u}function i(e,a){var t,n,o,r,i,u={};for(l=0;l<e.length;l++)for(t=e[l],n=t.name,o=n.split("."),r=o.shift(),i=u;r;)i[r]||(i[r]={}),o.length||(i[r]=t.value),i=i[r],r=o.shift();var d,l,s,p,m={},b={},c=[],y={},h=Object.prototype.hasOwnProperty;for(d in u)if(h.call(u,d)){p=u[d];for(l in p){a["option_"+l]={value:{options:"",label:p[l].name},hasOptions:!0,displayOrder:parseInt(l,10)},m=p[l].select,b=p[l].price,c=[];for(s in m)y={},b?(y[m[s]]=m[s]+" "+b[s],c.push(y)):c.push(m[s]);a["option_"+l].value.options=c}}}function u(){this.items={},this.add=function(e,a,t,n,o){this.items[e]={key:e,value:a,isEditable:t,hasOptions:n,displayOrder:o}},this.remove=function(e){delete this.items[e]}}var d={},l="https://{env}.paypal.com/cgi-bin/webscr",s="https://{env}.paypal.com/webapps/ppint/qrcode?data={url}&pattern={pattern}&height={size}",p="JavaScriptButton_{type}",m={name:"item_name",number:"item_number",locale:"lc",currency:"currency_code",recurrence:"p3",period:"t3",callback:"notify_url",button_id:"hosted_button_id"},b={da_DK:{buynow:"K\xc3\xb8b nu",cart:"L\xc3\xa6g i indk\xc3\xb8bsvogn",donate:"Doner",subscribe:"Abonner",paynow:"Betal nu",item_name:"Vare",number:"Nummer",amount:"Pris",quantity:"Antal"},de_DE:{buynow:"Jetzt kaufen",cart:"In den Warenkorb",donate:"Spenden",subscribe:"Abonnieren",paynow:"Jetzt bezahlen",item_name:"Artikel",number:"Nummer",amount:"Betrag",quantity:"Menge"},en_AU:{buynow:"Buy Now",cart:"Add to Cart",donate:"Donate",subscribe:"Subscribe",paynow:"Pay Now",item_name:"Item",number:"Number",amount:"Amount",quantity:"Quantity"},en_GB:{buynow:"Buy Now",cart:"Add to Cart",donate:"Donate",subscribe:"Subscribe",paynow:"Pay Now",item_name:"Item",number:"Number",amount:"Amount",quantity:"Quantity"},en_US:{buynow:"Buy Now",cart:"Add to Cart",donate:"Donate",subscribe:"Subscribe",paynow:"Pay Now",item_name:"Item",number:"Number",amount:"Amount",quantity:"Quantity"},es_ES:{buynow:"Comprar ahora",cart:"A\xc3\xb1adir al carro",donate:"Donar",subscribe:"Suscribirse",paynow:"Pague ahora",item_name:"Art\xc3\xadculo",number:"N\xc3\xbamero",amount:"Importe",quantity:"Cantidad"},es_XC:{buynow:"Comprar ahora",cart:"A\xc3\xb1adir al carrito",donate:"Donar",subscribe:"Suscribirse",paynow:"Pague ahora",item_name:"Art\xc3\xadculo",number:"N\xc3\xbamero",amount:"Importe",quantity:"Cantidad"},fr_CA:{buynow:"Acheter",cart:"Ajouter au panier",donate:"Faire un don",subscribe:"Souscrire",paynow:"Payer maintenant",item_name:"Objet",number:"Num\xc3\xa9ro",amount:"Montant",quantity:"Quantit\xc3\xa9"},fr_FR:{buynow:"Acheter",cart:"Ajouter au panier",donate:"Faire un don",subscribe:"Souscrire",paynow:"Payer maintenant",item_name:"Objet",number:"Num\xc3\xa9ro",amount:"Montant",quantity:"Quantit\xc3\xa9"},fr_XC:{buynow:"Acheter",cart:"Ajouter au panier",donate:"Faire un don",subscribe:"Souscrire",paynow:"Payer maintenant",item_name:"Objet",number:"Num\xc3\xa9ro",amount:"Montant",quantity:"Quantit\xc3\xa9"},he_IL:{buynow:"\xd7\u2022\xd7\u2122\xd7\xa9\xd7\u203a\xd7\xa2 \xd7\u201d\xd7 \xd7\xa7",cart:"\xd7\xaa\xd7\u2022\xd7\u2122\xd7 \xd7\xa7\xd7\u201d \xd7\u0153\xd7\xa1\xd7\u0153 \xd7\xa3\xd7\xa1\xd7\u2022\xd7\u201d",donate:"\xd7\x9d\xd7\u2022\xd7\xa8\xd7\xaa",subscribe:"\xd7\u2122\xd7\u2022\xd7 \xd7\u017e\xd7\u203a \xd7\xa3\xd7\xa8\xd7\u02dc\xd7\xa6\xd7\u201d",paynow:"\xd7\u203a\xd7\xa9\xd7\u2122\xd7\u2022 \xd7\xa9\xd7\u0153\xd7\x9d \xd7\xa2",item_name:"\xd7\u02dc\xd7\u2122\xd7\xa8\xd7\xa4",number:"\xd7\xa8\xd7\xa4\xd7\xa1\xd7\u017e",amount:"\xd7\x9d\xd7\u2022\xd7\u203a\xd7\xa1",quantity:"\xd7\u017e\xd7\u2022\xd7\xaa\xd7\u203a"},id_ID:{buynow:"Beli Sekarang",cart:"Tambah ke Keranjang",donate:"Donasikan",subscribe:"Berlangganan",paynow:"Bayar Sekarang",item_name:"Barang",number:"Nomor",amount:"Harga",quantity:"Kuantitas"},it_IT:{buynow:"Paga adesso",cart:"Aggiungi al carrello",donate:"Donazione",subscribe:"Iscriviti",paynow:"Paga Ora",item_name:"Oggetto",number:"Numero",amount:"Importo",quantity:"Quantit\xc3 "},ja_JP:{buynow:"\xe4\xbb\u0160\xe3\x81\u2122\xe3\x81\x90\xe8\xb3\xbc\xe5\u2026\xa5",cart:"\xe3\u201a\xab\xe3\u0192\xbc\xe3\u0192\u02c6\xe3\x81\xab\xe8\xbf\xbd\xe5\u0160 ",donate:"\xe5\xaf\u201e\xe4\xbb\u02dc",subscribe:"\xe8\xb3\xbc\xe8\xaa\xad",paynow:"\xe4\xbb\u0160\xe3\x81\u2122\xe3\x81\x90\xe6\u201d\xaf\xe6\u2030\u2022\xe3\x81\u2020",item_name:"\xe5\u2022\u2020\xe5\u201c\x81",number:"\xe7\u2022\xaa\xe5\x8f\xb7",amount:"\xe4\xbe\xa1\xe6 \xbc",quantity:"\xe6\u2022\xb0\xe9\u2021\x8f"},nl_NL:{buynow:"Nu kopen",cart:"Aan winkelwagentje toevoegen",donate:"Doneren",subscribe:"Abonneren",paynow:"Nu betalen",item_name:"Item",number:"Nummer",amount:"Bedrag",quantity:"Hoeveelheid"},no_NO:{buynow:"Kj\xc3\xb8p n\xc3\xa5",cart:"Legg til i kurv",donate:"Doner",subscribe:"Abonner",paynow:"Betal n\xc3\xa5",item_name:"Vare",number:"Nummer",amount:"Bel\xc3\xb8p",quantity:"Antall"},pl_PL:{buynow:"Kup teraz",cart:"Dodaj do koszyka",donate:"Przeka\xc5\xbc darowizn\xc4\u2122",subscribe:"Subskrybuj",paynow:"Zap\xc5\u201aa\xc4\u2021 teraz",item_name:"Przedmiot",number:"Numer",amount:"Kwota",quantity:"Ilo\xc5\u203a\xc4\u2021"},pt_BR:{buynow:"Comprar agora",cart:"Adicionar ao carrinho",donate:"Doar",subscribe:"Assinar",paynow:"Pagar agora",item_name:"Produto",number:"N\xc3\xbamero",amount:"Valor",quantity:"Quantidade"},ru_RU:{buynow:"\xd0\u0161\xd1\u0192\xd0\xbf\xd0\xb8\xd1\u201a\xd1\u0152 \xd1\x81\xd0\xb5\xd0\xb9\xd1\u2021\xd0\xb0\xd1\x81",cart:"\xd0\u201d\xd0\xbe\xd0\xb1\xd0\xb0\xd0\xb2\xd0\xb8\xd1\u201a\xd1\u0152 \xd0\xb2 \xd0\xba\xd0\xbe\xd1\u20ac\xd0\xb7\xd0\xb8\xd0\xbd\xd1\u0192",donate:"\xd0\u0178\xd0\xbe\xd0\xb6\xd0\xb5\xd1\u20ac\xd1\u201a\xd0\xb2\xd0\xbe\xd0\xb2\xd0\xb0\xd1\u201a\xd1\u0152",subscribe:"\xd0\u0178\xd0\xbe\xd0\xb4\xd0\xbf\xd0\xb8\xd1\x81\xd0\xb0\xd1\u201a\xd1\u0152\xd1\x81\xd1\x8f",paynow:"\xd0\u017e\xd0\xbf\xd0\xbb\xd0\xb0\xd1\u201a\xd0\xb8\xd1\u201a\xd1\u0152 \xd1\x81\xd0\xb5\xd0\xb9\xd1\u2021\xd0\xb0\xd1\x81",item_name:"\xd0\xa2\xd0\xbe\xd0\xb2\xd0\xb0\xd1\u20ac",number:"\xd0\x9d\xd0\xbe\xd0\xbc\xd0\xb5\xd1\u20ac",amount:"\xd0\xa1\xd1\u0192\xd0\xbc\xd0\xbc\xd0\xb0",quantity:"\xd0\u0161\xd0\xbe\xd0\xbb\xd0\xb8\xd1\u2021\xd0\xb5\xd1\x81\xd1\u201a\xd0\xb2\xd0\xbe"},sv_SE:{buynow:"K\xc3\xb6p nu",cart:"L\xc3\xa4gg till i kundvagn",donate:"Donera",subscribe:"Abonnera",paynow:"Betal nu",item_name:"Objekt",number:"Nummer",amount:"Belopp",quantity:"Antal"},th_TH:{buynow:"\xe0\xb8\u2039\xe0\xb8\xb7\xe0\xb9\u2030\xe0\xb8\xad\xe0\xb8\u2014\xe0\xb8\xb1\xe0\xb8\u2122\xe0\xb8\u2014\xe0\xb8\xb5",cart:"\xe0\xb9\u20ac\xe0\xb8\u017e\xe0\xb8\xb4\xe0\xb9\u02c6\xe0\xb8\xa1\xe0\xb8\xa5\xe0\xb8\u2021\xe0\xb8\u2022\xe0\xb8\xb0\xe0\xb8\x81\xe0\xb8\xa3\xe0\xb9\u2030\xe0\xb8\xb2",donate:"\xe0\xb8\u0161\xe0\xb8\xa3\xe0\xb8\xb4\xe0\xb8\u02c6\xe0\xb8\xb2\xe0\xb8\u201e",subscribe:"\xe0\xb8\u0161\xe0\xb8\xad\xe0\xb8\x81\xe0\xb8\xa3\xe0\xb8\xb1\xe0\xb8\u0161\xe0\xb8\xaa\xe0\xb8\xa1\xe0\xb8\xb2\xe0\xb8\u0160\xe0\xb8\xb4\xe0\xb8\x81",paynow:"\xe0\xb8\u02c6\xe0\xb9\u02c6\xe0\xb8\xb2\xe0\xb8\xa2\xe0\xb8\u2022\xe0\xb8\xad\xe0\xb8\u2122\xe0\xb8\u2122\xe0\xb8\xb5\xe0\xb9\u2030",item_name:"\xe0\xb8\u0160\xe0\xb8\xb7\xe0\xb9\u02c6\xe0\xb8\xad\xe0\xb8\xaa\xe0\xb8\xb4\xe0\xb8\u2122\xe0\xb8\u201e\xe0\xb9\u2030\xe0\xb8\xb2",number:"\xe0\xb8\xa3\xe0\xb8\xab\xe0\xb8\xb1\xe0\xb8\xaa\xe0\xb8\xaa\xe0\xb8\xb4\xe0\xb8\u2122\xe0\xb8\u201e\xe0\xb9\u2030\xe0\xb8\xb2",amount:"\xe0\xb8\xa3\xe0\xb8\xb2\xe0\xb8\u201e\xe0\xb8\xb2",quantity:"\xe0\xb8\u02c6\xe0\xb8\xb3\xe0\xb8\u2122\xe0\xb8\xa7\xe0\xb8\u2122"},tr_TR:{buynow:"Hemen Al\xc4\xb1n",cart:"Sepete Ekleyin",donate:"Ba\xc4\u0178\xc4\xb1\xc5\u0178 Yap\xc4\xb1n",subscribe:"Abone Olun",paynow:"\xc5\u017eimdi \xc3\xb6de",item_name:"\xc3\u0153r\xc3\xbcn",number:"Numara",amount:"Tutar",quantity:"Miktar"},zh_CN:{buynow:"\xe7\xab\u2039\xe5\x8d\xb3\xe8\xb4\xad\xe4\xb9\xb0",cart:"\xe6\xb7\xbb\xe5\u0160 \xe5\u02c6\xb0\xe8\xb4\xad\xe7\u2030\xa9\xe8\xbd\xa6",donate:"\xe6\x8d\x90\xe8\xb5 ",subscribe:"\xe7\xa7\u0178\xe7\u201d\xa8",paynow:"\xe7\u017d\xb0\xe5\u0153\xa8\xe6\u201d\xaf\xe4\xbb\u02dc",item_name:"\xe7\u2030\xa9\xe5\u201c\x81",number:"\xe7\xbc\u2013\xe5\x8f\xb7",amount:"\xe9\u2021\u2018\xe9\xa2\x9d",quantity:"\xe6\u2022\xb0\xe9\u2021\x8f"},zh_HK:{buynow:"\xe7\xab\u2039\xe5\x8d\xb3\xe8\xb2\xb7",cart:"\xe5\u0160 \xe5\u2026\xa5\xe8\xb3\xbc\xe7\u2030\xa9\xe8\xbb\u0160",donate:"\xe6\x8d\x90\xe6\xac\xbe",subscribe:"\xe8\xa8\u201a\xe7\u201d\xa8",paynow:"\xe7\u017d\xb0\xe5\u0153\xa8\xe6\u201d\xaf\xe4\xbb\u02dc",item_name:"\xe9 \u2026\xe7\u203a\xae",number:"\xe8\u2122\u0178\xe7\xa2\xbc",amount:"\xe9\u2021\u2018\xe9\xa1\x8d",quantity:"\xe6\u2022\xb8\xe9\u2021\x8f"},zh_TW:{buynow:"\xe7\xab\u2039\xe5\x8d\xb3\xe8\xb3\xbc",cart:"\xe5\u0160 \xe5\u02c6\xb0\xe8\xb3\xbc\xe7\u2030\xa9\xe8\xbb\u0160",donate:"\xe6\x8d\x90\xe6\xac\xbe",subscribe:"\xe8\xa8\u201a\xe9\u2013\xb1",paynow:"\xe7\u017d\xb0\xe5\u0153\xa8\xe6\u201d\xaf\xe4\xbb\u02dc",item_name:"\xe5\u2022\u2020\xe5\u201c\x81",number:"\xe5\u2022\u2020\xe5\u201c\x81\xe7\xb7\xa8\xe8\u2122\u0178",amount:"\xe5\u2013\xae\xe5\u0192\xb9",quantity:"\xe6\u2022\xb8\xe9\u2021\x8f"},zh_XC:{buynow:"\xe7\xab\u2039\xe5\x8d\xb3\xe8\xb4\xad\xe4\xb9\xb0",cart:"\xe6\xb7\xbb\xe5\u0160 \xe5\u02c6\xb0\xe8\xb4\xad\xe7\u2030\xa9\xe8\xbd\xa6",donate:"\xe6\x8d\x90\xe8\xb5 ",subscribe:"\xe7\xa7\u0178\xe7\u201d\xa8",paynow:"\xe7\u017d\xb0\xe5\u0153\xa8\xe6\u201d\xaf\xe4\xbb\u02dc",item_name:"\xe7\u2030\xa9\xe5\u201c\x81",number:"\xe7\xbc\u2013\xe5\x8f\xb7",amount:"\xe9\u2021\u2018\xe9\xa2\x9d",quantity:"\xe6\u2022\xb0\xe9\u2021\x8f"}};if(PAYPAL.apps.ButtonFactory||(d.config={labels:{}},d.buttons={buynow:0,cart:0,donate:0,qr:0,subscribe:0},d.create=function(e,n,r,i){var d,l,s,b,c=new u;if(!e)return!1;for(l in n)b=n[l],c.add(m[l]||l,b.value,b.isEditable,b.hasOptions,b.displayOrder);return r=r||"buynow",s="www",c.items.env&&c.items.env.value&&(s+="."+c.items.env.value),c.items.hosted_button_id?c.add("cmd","_s-xclick"):"cart"===r?(c.add("cmd","_cart"),c.add("add",!0)):"donate"===r?c.add("cmd","_donations"):"subscribe"===r?(c.add("cmd","_xclick-subscriptions"),c.items.amount&&!c.items.a3&&c.add("a3",c.items.amount.value)):c.add("cmd","_xclick"),c.add("business",e),c.add("bn",p.replace(/\{type\}/,r)),c.add("env",s),"qr"===r?(d=o(c,c.items.size),c.remove("size")):d=t(c,r),a(),this.buttons[r]+=1,i&&i.appendChild(d),d},PAYPAL.apps.ButtonFactory=d),"undefined"!=typeof e){var c,y,h,f,w,g,A=PAYPAL.apps.ButtonFactory,_=e.getElementsByTagName("script");for(w=0,g=_.length;g>w;w++)c=_[w],c&&c.src&&(y=c&&r(c),h=y&&y.button&&y.button.value,f=c.src.split("?merchant=")[1],f&&(A.create(f,y,h,c.parentNode),c.parentNode.removeChild(c)))}}(document),"object"==typeof module&&"object"==typeof module.exports&&(module.exports=PAYPAL);