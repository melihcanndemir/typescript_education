# TypeScript Uygulama: Temel Tipler ve Fonksiyonlar

## Neden Uygulama Yapıyoruz?

TypeScript'in gücünü ve esnekliğini anlamak için uygulamalar yapmak çok önemlidir. Uygulamalar, teorik bilgilerin gerçek dünya senaryolarında nasıl kullanıldığını gösterir ve problem çözme becerilerinizi geliştirir.

## Uygulama 1: Basit Bir Hesap Makinesi
Bu uygulamada, iki sayıyı toplayan, çıkaran, çarpan ve bölen basit bir hesap makinesi fonksiyonu oluşturacağız.

```typescript
function hesapMakinesi(sayi1: number, sayi2: number, islem: string): number {
  switch (islem) {
    case '+':
      return sayi1 + sayi2;
    case '-':
      return sayi1 - sayi2;
    case '*':
      return sayi1 * sayi2;
    case '/':
      if (sayi2 === 0) {
        throw new Error('Sıfıra bölme hatası!');
      }
      return sayi1 / sayi2;
    default:
      throw new Error('Geçersiz işlem!');
  }
}

console.log(hesapMakinesi(10, 5, '+')); // 15
console.log(hesapMakinesi(10, 5, '-')); // 5
console.log(hesapMakinesi(10, 5, '*')); // 50
console.log(hesapMakinesi(10, 5, '/')); // 2
```

## Uygulama 2: Bir Öğrenci Not Hesaplama
Bu uygulamada, öğrencinin notlarını alıp ortalamasını hesaplayan ve geçti/kaldı durumunu belirleyen bir fonksiyon oluşturacağız.

```typescript
function notHesapla(notlar: number[]): string {
  let toplam = 0;
  for (let not of notlar) {
    toplam += not;
  }
  let ortalama = toplam / notlar.length;

  if (ortalama >= 60) {
    return 'Geçti. Ortalama: ' + ortalama;
  } else {
    return 'Kaldı. Ortalama: ' + ortalama;
  }
}

console.log(notHesapla([50, 60, 70, 80])); // Kaldı. Ortalama: 65
console.log(notHesapla([70, 80, 90, 100])); // Geçti. Ortalama: 85
```

## Uygulama 3: Bir String'i Ters Çevirme
Bu uygulamada, verilen bir string'i ters çeviren bir fonksiyon oluşturacağız.

```typescript
function stringTersCevir(str: string): string {
  return str.split('').reverse().join('');
}

console.log(stringTersCevir('Merhaba')); // abahreM
console.log(stringTersCevir('TypeScript')); // tpircSetyT
```

## Örnekler

### Örnek 1:
Bir kullanıcının adını ve yaşını alıp konsola yazdıran bir fonksiyon oluşturun.

### Örnek 2:
Bir dizideki en büyük sayıyı bulan bir fonksiyon oluşturun.

### Örnek 3:
Bir sayının tek mi çift mi olduğunu kontrol eden bir fonksiyon oluşturun.

### Örnek 4:
Bir e-ticaret sitesinde, kullanıcının sepetindeki ürünlerin toplam tutarını hesaplayan bir fonksiyon oluşturun.

### Örnek 5:
Bir hava durumu uygulamasında, sıcaklığı Celsius'tan Fahrenheit'a çeviren bir fonksiyon oluşturun.

## AI Öğrenme İpuçları
💡 **İpucu**: TypeScript'te tipleri doğru kullanmak, kodunuzun daha güvenli ve okunabilir olmasını sağlar.

💡 **İpucu**: Fonksiyonları küçük ve özelleştirilmiş parçalar halinde yazmak, kodunuzun daha modüler olmasını sağlar.

💡 **İpucu**: Hata yönetimi için try-catch bloklarını kullanmayı unutmayın.

💡 **İpucu**: Kodunuzu düzenli ve okunabilir tutmak için yorumlar ekleyin.

💡 **İpucu**: TypeScript'in gelişmiş özelliklerini (örneğin, generic'ler, sınıflar, arayüzler) öğrenerek daha karmaşık uygulamalar geliştirebilirsiniz.