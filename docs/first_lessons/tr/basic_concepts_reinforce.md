# TypeScript Temel Kavramları: Öğrendiklerimizi Pekiştirelim

TypeScript'e giriş yaparken öğrendiğimiz temel kavramları bu bölümde pekiştireceğiz. Değişkenler, tipler, fonksiyonlar ve arayüzler gibi konuları tekrar gözden geçirecek ve örneklerle daha iyi anlamaya çalışacağız. Bu bölüm, öğrendiklerinizi sağlamlaştırmak ve pratik uygulamalara geçmeden önce kendinizi daha güvende hissetmenizi sağlamak için tasarlandı.

## Neden Pekiştirme?

Öğrendiğimiz bilgileri hemen kullanmaya başlamadan önce pekiştirmek, uzun vadede daha başarılı olmamızı sağlar. Bu adım, bilgilerin hafızamızda daha kalıcı hale gelmesine ve daha karmaşık problemleri çözerken daha rahat olmamıza yardımcı olur.

## Bu Bölümde Neler Var?

- Değişken tanımlama ve tiplendirme alıştırmaları
- Fonksiyon oluşturma ve parametre tiplerini belirleme egzersizleri
- Arayüz tanımlama ve kullanma örnekleri
- TypeScript'in sunduğu avantajları tekrar hatırlama

Haydi başlayalım ve TypeScript dünyasında daha emin adımlarla ilerleyelim!

## Örnekler

### Örnek 1: Değişken Tanımlama ve Tiplendirme
```typescript
let ad: string = "Ahmet";
let yas: number = 30;
let evliMi: boolean = true;

console.log(`Adı: ${ad}, Yaşı: ${yas}, Evli mi: ${evliMi}`);
```
Bu örnekte, `ad` değişkeni `string` tipinde, `yas` değişkeni `number` tipinde ve `evliMi` değişkeni `boolean` tipinde tanımlanmıştır. TypeScript, bu tipleri kontrol ederek hataları önlememize yardımcı olur.

### Örnek 2: Fonksiyon Oluşturma
```typescript
function topla(a: number, b: number): number {
  return a + b;
}

let sonuc: number = topla(5, 3);
console.log(`Sonuç: ${sonuc}`);
```
Bu örnekte, `topla` fonksiyonu iki `number` tipinde parametre alır ve `number` tipinde bir değer döndürür. Fonksiyonun doğru tiplerle çağrıldığından emin olmak, TypeScript'in sağladığı önemli bir avantajdır.

### Örnek 3: Arayüz Tanımlama
```typescript
interface Kisi {
  ad: string;
  yas: number;
}

function yazdir(kisi: Kisi) {
  console.log(`Adı: ${kisi.ad}, Yaşı: ${kisi.yas}`);
}

let ahmet: Kisi = { ad: "Ahmet", yas: 30 };
yazdir(ahmet);
```
Bu örnekte, `Kisi` adında bir arayüz tanımlanmıştır. Bu arayüz, `ad` ve `yas` özelliklerini içerir. `yazdir` fonksiyonu, `Kisi` arayüzünü uygulayan bir nesne alır ve bu nesnenin özelliklerini yazdırır. Arayüzler, kodumuzun daha düzenli ve anlaşılır olmasını sağlar.

### Örnek 4: Union Tipleri Kullanma
```typescript
function displayId(id: string | number) {
  console.log(`ID: ${id}`);
}

displayId(123);
displayId("ABC");
```
Bu örnekte, `displayId` fonksiyonu hem `string` hem de `number` tipinde bir `id` parametresi alabilir. Bu, union tiplerin esnekliğini gösterir.

## AI Öğrenme İpuçları
💡 **İpucu**: TypeScript'te değişken tiplerini belirtmek, kodunuzun daha güvenilir olmasını sağlar. Tipleri doğru kullandığınızdan emin olun.

💡 **İpucu**: Fonksiyonların parametre tiplerini ve dönüş tiplerini belirtmek, fonksiyonların doğru şekilde kullanılmasını kolaylaştırır.

💡 **İpucu**: Arayüzler, nesnelerin yapısını tanımlamak için kullanışlıdır. Arayüzleri kullanarak kodunuzu daha modüler ve anlaşılır hale getirebilirsiniz.

💡 **İpucu**: Hata mesajlarını dikkatlice okuyun. TypeScript, hataları erken tespit etmenize yardımcı olur. Hata mesajları, sorunun kaynağını anlamanıza ve çözmenize yardımcı olabilir.

💡 **İpucu**: Pratik yapmaktan çekinmeyin! Ne kadar çok kod yazarsanız, TypeScript'i o kadar iyi öğrenirsiniz.
