import React, { useEffect } from 'react';

const ListItem = ({ item }) => {
  return (
    <li className="py-2 border-b border-gray-200">
      {item}
    </li>
  );
};

const List = ({ items }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

const Kurumlar = () => {
    useEffect(() => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'https://acikyesil.bursa.bel.tr/api/3/action/datastore_search';
        
        const fetchData = async () => {
          try {
            const response = await fetch(proxyUrl + apiUrl, {
              headers: {
                'Origin': 'http://localhost:5173',
                'X-Requested-With': 'XMLHttpRequest'
              }
            });
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        
        fetchData();
      }, []);

    const items = [
        "ORHANELİ İLÇE SAĞLIK MÜDÜRLÜĞÜ",
        "ORHANGAZİ İLÇE SAĞLIK MÜDÜRLÜĞÜ",
        "OSMANGAZİ İLÇE SAĞLIK MÜDÜRLÜĞÜ",
        "PTT ULUCAMİ MERKEZ MÜDÜRLÜĞÜ",
        "PTT GEMLİK MERKEZ MÜDÜRLÜĞÜ",
        "PTT GEMLİK CUMHURİYET ŞUBESİ",
        "PTT YILDIRIM ŞUBESİ",
        "PTT YEŞİLYAYLA ŞUBESİ",
        "VAKIFLAR BÖLGE MÜDÜRLÜĞÜ",
        "BURSA İL MÜFTÜLÜĞÜ",
        "İL SOSYAL YARDIMLAŞMA VE DAYANIŞMA VAKFI MÜDÜRLÜĞÜ",
        "İŞ TEFTİŞ GRUP BAŞKANLIĞI",
        "ÇALIŞMA VE İŞ KURUMU İL MÜDÜRLÜĞÜ",
        "İLLER BANKASI A.Ş.BÖLGE MÜDÜRLÜĞÜ",
        "SGK BURSA İL MÜDÜRLÜĞÜ",
        "TÜBİTAK TEST VE ANALİZ LABORATUVAR (BUTAL)MÜDÜRLÜĞÜ",
        "ÇEVRA VE ŞEHİRCİLİK İL MÜDÜRLÜĞÜ",
        "ULUDAĞ ELEKTRİK DAĞITIM A.Ş.GENEL MÜDÜRLÜĞÜ",
        "TEDAŞ ULUDAĞ BÖLGE KOORDİNATÖRLÜĞÜ",
        "BURSA EĞİTİM MERKEZİ MÜDÜRLÜĞÜ",
        "İL AFET VE ACİL DURUM MÜDÜRLÜĞÜ",
        "BEBKA GENEL SEKRETERLİĞİ",
        "KOSGEB MÜDÜRLÜĞÜ",
        "PTT VAKIFKÖY ŞUBESİ",
        "PTT ŞİRİNEVLER ŞUBESİ",
        "PTT SIRACEVİZLER ŞUBESİ",
        "MARMARA BİRLİK GENEL MÜDÜRLÜĞÜ",
        "TAPU VE KADASTRO BÖLGE MÜDÜRLÜĞÜ",
        "KADASTRO İL MÜDÜRLÜĞÜ",
        "İL HALK SAĞLIĞI MÜDÜRLÜĞÜ",
        "GÖÇ İDARESİ MÜDÜRLÜĞÜ",
        "İL MAHALLİ İDARELER MÜDÜRLÜĞÜ",
        "İL İDARE KURULU MÜDÜRLÜĞÜ",
        "İL SOSYAL ETÜD VE PROJE MÜDÜRLÜĞÜ",
        "HUKUK İŞLERİ ŞUBE MÜDÜRLÜĞÜ",
        "İL YAZI İŞLERİ MÜDÜRLÜĞÜ",
        "İL BASIN VE HALKLA İLİŞKİLER MÜDÜRLÜĞÜ",
        "BURSA DEVLET TİYATROLARI MÜDÜRLÜĞÜ",
        "BURSA DEVLET SENFONİ ORKESTRASI MÜDÜRLÜĞÜ",
        "BURSA DEVLET KLASİK TÜRK MÜZİĞİ KORO MÜDÜRLÜĞÜ",
        "TÜRKİYE İSTATİSTİK KURUMU BURSA BÖLGE MÜDÜRLÜĞÜ",
        "KREDİ VE YURTLAR KURUMU BÖLGE MÜDÜRLÜĞÜ",
        "ÜRÜN DENETMENLERİ BURSA GRUP BAŞKANLIĞI",
        "E.Ü.A.Ş.BURSA DOĞALGAZ KOM. ÇEV.SANT.İŞL.MÜDÜRLÜĞÜ",
        "ELEKTRİK ÜRETİM A.Ş. ORHANELİ TERMİK SANTRALİ İŞLT.MÜDÜRLÜĞÜ",
        "BOTAŞ BURSA ŞUBE MÜRÜRLÜĞÜ",
        "BURSAGAZ A.Ş. GENEL MÜDÜR YRD.",
        "GIDA KONT VE MRK.ARŞ.ENS.MÜDÜRLÜĞÜ",
        "TARIM VE KIRSAL KALKINMAYI DESTEKLEME KURUMU BURSA İL KOORDİNATÖRLÜĞÜ",
        "ULUDAĞ GÜMRÜK VE TİCARET BÖLGE MÜDÜRLÜĞÜ",
        "İL TİCARET MÜDÜRLÜĞÜ",
        "ÖZEL GÜVENLİK DENETLEME BAŞKANLIĞI BURSA BÖLGE MÜDÜRLÜĞÜ",
        "BURSA BÖLGE GÜMRÜK VE TİCARET MÜDÜRLÜĞÜ",
        "BURSA İL ÖZEL İDARE MÜDÜRLÜĞÜ",
        "OSMANGAZİ ÜNİVERSİTESİ REKTÖRLÜĞÜ",
        "BURSA TEKNİK ÜNİVERSİTESİ REKTÖRLÜĞÜ",
        "BURSA ULUDAĞ ÜNİVERSİTESİ REKTÖRLÜĞÜ",
        "ULUDAĞ ÜNİVERSİTESİ TIP FAKÜLTESİ HASTANESİ",
        "BURSA SAĞLIK MÜDÜRLÜĞÜ",
        "BURSA NÜFUS VE VATANDAŞLIK MÜDÜRLÜĞÜ",
        "BURSA KADIN DOĞUM VE ÇOCUK HASTALIKLARI HASTANESİ",
        "BURSA ŞEVKET YILMAZ EĞİTİM VE ARAŞTIRMA HASTANESİ",
        "BURSA YÜKSEK İHTİSAS EĞİTİM VE ARAŞTIRMA HASTANESİ",
        "BURSA İL EMNİYET MÜDÜRLÜĞÜ",
        "BURSA İL JANDARMA KOMUTANLIĞI",
        "BURSA İL MİLLİ EĞİTİM MÜDÜRLÜĞÜ",
        "BURSA İL TARIM VE ORMAN MÜDÜRLÜĞÜ",
        "BURSA AİLE ÇALIŞMA VE SOSYAL HİZMETLER İL MÜDÜRLÜĞÜ",
        "BURSA AİLE MAHKEMESİ",
        "BURSA ASLİYE CEZA MAHKEMESİ",
        "BURSA ASLİYE HUKUK MAHKEMESİ",
        "BURSA İCRA DAİRESİ",
        "BURSA İCRA VE İFLAS HUKUK MAHKEMESİ",
        "BURSA SULH HUKUK MAHKEMESİ",
        "BURSA SULH CEZA MAHKEMESİ",
        "BURSA TİCARET MAHKEMESİ",
        "BURSA SİLAHLI KUVVETLER HASTANESİ",
        "BURSA DEVLET HASTANESİ",
        "BURSA ÖZEL ORHANGAZİ TIP MERKEZİ",
        "BURSA ÖZEL SİLAHLI KUVVETLER HASTANESİ",
        "BURSA ÖZEL BAHÇEŞEHİR TIP MERKEZİ",
        "BURSA ÖZEL BAŞER HASTANESİ",
        "BURSA ÖZEL BAŞKENT HASTANESİ",
        "BURSA ÖZEL HAYAT HASTANESİ",
        "BURSA ÖZEL KORU HASTANESİ",
        "BURSA ÖZEL MEDİKALP HASTANESİ",
        "BURSA ÖZEL UMUT HASTANESİ",
        "BURSA ÖZEL SİNEKLİKLİ HASTANESİ",
        "BURSA ÖZEL ARABAYATAĞI TIP MERKEZİ",
        "BURSA ÖZEL DİLARA HASTANESİ",
        "BURSA ÖZEL ERZURUM TIP MERKEZİ",
        "BURSA ÖZEL İDAŞ TIP MERKEZİ",
        "BURSA ÖZEL UYANIK TIP MERKEZİ",
        "BURSA ÖZEL YALOVA TIP MERKEZİ",
        "BURSA ÖZEL GÜVEN TIP MERKEZİ",
        "BURSA ÖZEL MERKEZ KANMER TIP MERKEZİ",
        "BURSA ÖZEL NEFTALI TIP MERKEZİ",
        "BURSA ÖZEL TEKSAN TIP MERKEZİ",
        "BURSA ÖZEL TIPMER TIP MERKEZİ",
        "BURSA ÖZEL AĞAOĞLU TIP MERKEZİ",
        "BURSA ÖZEL ANATOLIA TIP MERKEZİ",
        "BURSA ÖZEL BÜYÜKORHAN TIP MERKEZİ",
        "BURSA ÖZEL ES-SEBAHAT TIP MERKEZİ",
        "BURSA ÖZEL FATMA-BURÇİN TIP MERKEZİ",
        "BURSA ÖZEL MERKEZ TIP MERKEZİ",
        "BURSA ÖZEL KARAMANLAR TIP MERKEZİ",
        "BURSA ÖZEL NEFTALI TIP MERKEZİ",
        "BURSA ÖZEL SİNEKLİKLİ TIP MERKEZİ",
        "BURSA ÖZEL TIPMER TIP MERKEZİ",
        "BURSA ÖZEL UMUT TIP MERKEZİ",
        "BURSA ÖZEL YILDIZ TIP MERKEZİ",
        "BURSA ÖZEL BURSA CERRAHİ TIP MERKEZİ",
        "BURSA ÖZEL CEYLAN TIP MERKEZİ",
        "BURSA ÖZEL İDAŞ TIP MERKEZİ",
        "BURSA ÖZEL UYANIK TIP MERKEZİ",
        "BURSA ÖZEL KARACALAR TIP MERKEZİ",
        "BURSA ÖZEL MEHMET AKİF TIP MERKEZİ",
        "BURSA ÖZEL NEFTALI TIP MERKEZİ",
        "BURSA ÖZEL SİNEKLİKLİ TIP MERKEZİ",
        "BURSA ÖZEL TIPMER TIP MERKEZİ",
        "BURSA ÖZEL UMUT TIP MERKEZİ",
        "BURSA ÖZEL YILDIZ TIP MERKEZİ",
        "BURSA ÖZEL ÇELİKLER TIP MERKEZİ",
        "BURSA ÖZEL CİNLEME TIP MERKEZİ",
        "BURSA ÖZEL İDAŞ TIP MERKEZİ",
        "BURSA ÖZEL KALİFET TIP MERKEZİ",
        "BURSA ÖZEL MARİFET TIP MERKEZİ",
        "BURSA ÖZEL MÜKERREM TIP MERKEZİ",
        "BURSA ÖZEL OKYANUS TIP MERKEZİ",
        "BURSA ÖZEL ŞEKER TIP MERKEZİ",
        "BURSA ÖZEL TEKSAN TIP MERKEZİ",
        "BURSA ÖZEL YILMAZ TIP MERKEZİ",
        "BURSA ÖZEL ÇEKİRGE TIP MERKEZİ",
        "BURSA ÖZEL CİNLEME TIP MERKEZİ",
        "BURSA ÖZEL İDAŞ TIP MERKEZİ",
        "BURSA ÖZEL KALİFET TIP MERKEZİ",
        "BURSA ÖZEL MARİFET TIP MERKEZİ",
        "BURSA ÖZEL MÜKERREM TIP MERKEZİ",
        "BURSA ÖZEL OKYANUS TIP MERKEZİ",
        "BURSA ÖZEL ŞEKER TIP MERKEZİ",
        "BURSA ÖZEL TEKSAN TIP MERKEZİ",
        "BURSA ÖZEL YILMAZ TIP MERKEZİ",
        "BURSA ÖZEL ÇEKİRGE TIP MERKEZİ",
        "BURSA ÖZEL DEVRAN TIP MERKEZİ",
        "BURSA ÖZEL DÜZYOL TIP MERKEZİ",
        "BURSA ÖZEL ESMA TIP MERKEZİ",
        "BURSA ÖZEL EYYÜBİ TIP MERKEZİ",
        "BURSA ÖZEL GÜL TIP MERKEZİ",
        "BURSA ÖZEL KAVAK TIP MERKEZİ",
        "BURSA ÖZEL ORHANELİ TIP MERKEZİ",
        "BURSA ÖZEL YALOVA TIP MERKEZİ",
        "BURSA ÖZEL YILDIZ TIP MERKEZİ",
        "BURSA ÖZEL YUNUSEMRE TIP MERKEZİ",
        "BURSA ÖZEL ÇEKİRGE TIP MERKEZİ",
        "BURSA ÖZEL DEVRAN TIP MERKEZİ",
        "BURSA ÖZEL DÜZYOL TIP MERKEZİ",
        "BURSA ÖZEL ESMA TIP MERKEZİ",
        "BURSA ÖZEL EYYÜBİ TIP MERKEZİ",
        "BURSA ÖZEL GÜL TIP MERKEZİ",
        "BURSA ÖZEL KAVAK TIP MERKEZİ",
        "BURSA ÖZEL ORHANELİ TIP MERKEZİ",
        "BURSA ÖZEL YALOVA TIP MERKEZİ",
        "BURSA ÖZEL YILDIZ TIP MERKEZİ",
        "BURSA ÖZEL YUNUSEMRE TIP MERKEZİ"
      ];
      

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kurumlar</h1>
      <List items={items} />
    </div>
  );
};

export default Kurumlar;
