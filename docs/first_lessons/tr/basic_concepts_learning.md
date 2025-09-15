# TypeScript'e Giriş: Temel Kavramları Öğrenme

TypeScript, JavaScript'in üzerine inşa edilmiş, statik tipli bir programlama dilidir. Bu, kodunuzdaki hataları daha geliştirme aşamasındayken yakalamanızı sağlar. Bu adımda, TypeScript'in temel kavramlarını öğreneceğiz.

## TypeScript'in Faydaları
- **Statik Tiplendirme**: Değişkenlerin tiplerini tanımlayarak, hataları erken aşamada bulursunuz.
- **Gelişmiş IDE Desteği**: Daha iyi otomatik tamamlama, hata ayıklama ve kod navigasyonu.
- **Daha Büyük Projeler için Ölçeklenebilirlik**: Kodunuzu daha düzenli ve yönetilebilir hale getirir.
- **JavaScript ile Uyumluluk**: Mevcut JavaScript kodunuzu TypeScript ile kolayca kullanabilirsiniz.

## Temel Kavramlar
- **Tipler (Types)**: TypeScript'te değişkenlerin tiplerini belirtmek zorunludur (ancak `any` tipi ile bu zorunluluk aşılabilir). Temel tipler şunlardır:
  - `string`: Metinsel ifadeler.
  - `number`: Sayısal değerler.
  - `boolean`: `true` veya `false` değerleri.
  - `any`: Herhangi bir tipteki değer.
  - `void`: Bir fonksiyonun değer döndürmediğini belirtir.
  - `null` ve `undefined`: Bu tipler, sırasıyla `null` ve `undefined` değerlerini temsil eder.
- **Değişken Tanımlama**: `let` veya `const` anahtar kelimeleriyle değişken tanımlanır. `let` değişkenin değeri değiştirilebilirken, `const` ile tanımlanan değişkenlerin değeri sabittir.
- **Fonksiyonlar (Functions)**: TypeScript'te fonksiyonların parametre tiplerini ve dönüş tipini belirtebilirsiniz.
- **Arayüzler (Interfaces)**: Nesnelerin yapısını tanımlamak için kullanılır. Hangi özelliklere ve tiplere sahip olması gerektiğini belirtir.
- **Sınıflar (Classes)**: Nesne yönelimli programlamanın temel yapı taşıdır. Özellikleri ve metotları içerir.

```typescript
// Değişken tanımlama
let isim: string = "Ahmet";
const pi: number = 3.14;
let aktifMi: boolean = true;

// Fonksiyon tanımlama
function topla(a: number, b: number): number {
  return a + b;
}

// Arayüz tanımlama
interface Kisi {
  ad: string;
  yas: number;
}

// Sınıf tanımlama
class Ogrenci {
  ad: string;
  soyad: string;

  constructor(ad: string, soyad: string) {
    this.ad = ad;
    this.soyad = soyad;
  }
}
```

TypeScript'in temelini oluşturan bu kavramları anlamak, daha karmaşık uygulamalar geliştirmek için sağlam bir temel oluşturacaktır.

## Örnekler

### Örnek 1: Basit bir değişken tanımlama örneği
```typescript
let mesaj: string = "Merhaba, TypeScript!";
console.log(mesaj);
```
Bu örnekte, `mesaj` adında bir `string` değişkeni tanımlanmış ve değeri `"Merhaba, TypeScript!"` olarak atanmıştır. `console.log` ile bu mesaj ekrana yazdırılır.

### Örnek 2: Bir fonksiyon örneği
```typescript
function carp(a: number, b: number): number {
  return a * b;
}

let sonuc: number = carp(5, 3);
console.log(sonuc); // Output: 15
```
Bu örnekte, `carp` adında iki sayıyı çarpan bir fonksiyon tanımlanmıştır. Fonksiyonun parametreleri ve dönüş tipi `number` olarak belirtilmiştir.

### Örnek 3: Arayüz (Interface) kullanımı
```typescript
interface Kitap {
  baslik: string;
  yazar: string;
  sayfaSayisi: number;
}

let benimKitabim: Kitap = {
  baslik: "TypeScript'e Giriş",
  yazar: "Ali Veli",
  sayfaSayisi: 200
};

console.log(benimKitabim.baslik);
```
Bu örnekte, `Kitap` adında bir arayüz tanımlanmıştır. Bu arayüz, bir kitabın başlığı, yazarı ve sayfa sayısı gibi özelliklerini belirtir. `benimKitabim` adında bir değişken, bu arayüze uygun olarak tanımlanmıştır.

### Örnek 4: Sınıf (Class) kullanımı
```typescript
class Araba {
  marka: string;
  model: string;

  constructor(marka: string, model: string) {
    this.marka = marka;
    this.model = model;
  }

  bilgileriGoster(): void {
    console.log(`Araba: ${this.marka} ${this.model}`);
  }
}

let benimArabam = new Araba("Toyota", "Corolla");
benimArabam.bilgileriGoster(); // Output: Araba: Toyota Corolla
```
Bu örnekte, `Araba` adında bir sınıf tanımlanmıştır. Sınıfın `marka` ve `model` adında özellikleri ve bir `bilgileriGoster` metodu bulunmaktadır. `benimArabam` adında bir nesne, bu sınıftan oluşturulmuştur.

### Örnek 5: `any` tipinin kullanımı
```typescript
let belirsiz: any = "Bu bir string olabilir";
belirsiz = 123; // Artık bir sayı
belirsiz = true; // Artık bir boolean

console.log(belirsiz);
```
Bu örnekte, `belirsiz` adında bir değişken `any` tipinde tanımlanmıştır. Bu değişken, farklı tiplerde değerler alabilir. `any` tipini kullanmak, TypeScript'in tip kontrolünü devre dışı bırakır ve genellikle kaçınılması gereken bir durumdur.

## AI Öğrenme İpuçları
💡 **İpucu**: TypeScript'i öğrenirken, statik tiplendirmenin avantajlarını anlamaya çalışın. Bu, daha güvenilir ve bakımı kolay kod yazmanıza yardımcı olacaktır.

💡 **İpucu**: TypeScript derleyicisinin (`tsc`) konfigürasyon dosyası olan `tsconfig.json` dosyasını inceleyin ve projenize uygun ayarları yapın. Bu dosya, derleme sürecini özelleştirmenize olanak tanır.

💡 **İpucu**: Arayüzleri ve sınıfları kullanarak, kodunuzu daha modüler ve yeniden kullanılabilir hale getirin. Bu, büyük projelerde çalışırken özellikle önemlidir.

💡 **İpucu**: `any` tipini kullanmaktan mümkün olduğunca kaçının. Tip güvenliğini sağlamak için, değişkenlerin ve fonksiyon parametrelerinin tiplerini açıkça belirtin.

💡 **İpucu**: TypeScript'in sunduğu gelişmiş IDE desteğinden faydalanın. Otomatik tamamlama, hata ayıklama ve kod navigasyonu gibi özellikler, geliştirme sürecinizi hızlandıracaktır.