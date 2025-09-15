# TypeScript Bilgi Testi: Kendini Sına

TypeScript'e giriş dersini tamamladın! Şimdi, öğrendiklerini test etme zamanı. Bu değerlendirme, temel kavramları ne kadar iyi anladığını görmeni sağlayacak. Her soru, TypeScript'in önemli bir yönünü kapsıyor. Başarılar!

## Talimatlar:

Aşağıdaki soruları dikkatlice oku ve doğru cevapları bulmaya çalış. Cevaplarını not alabilir veya bir kağıda yazabilirsin. Daha sonra cevapları kontrol ederek performansını değerlendirebilirsin.

### Soru 1:

Aşağıdakilerden hangisi TypeScript'in temel özelliklerinden biri değildir?

A) Statik tiplendirme  
B) Arayüzler (Interfaces)  
C) Dinamik tiplendirme  
D) Sınıflar (Classes)

### Soru 2:

```typescript
let age: number = "30";
```

Yukarıdaki kod bloğu çalışır mı? Eğer çalışmazsa, neden?

### Soru 3:

TypeScript'te bir fonksiyonun geri dönüş tipini nasıl belirtiriz? Bir örnek verin.

### Soru 4:

Aşağıdaki TypeScript kodunda bir hata var mıdır? Varsa, düzeltin.

```typescript
function greet(name) {
  console.log("Merhaba, " + name);
}

greet(123);
```

### Soru 5:

TypeScript'te `any` veri tipinin kullanılmasının potansiyel dezavantajları nelerdir?

## Cevap Anahtarı:

1. **C) Dinamik tiplendirme** (TypeScript statik tiplendirme kullanır.)  
2. Çalışmaz. Çünkü `age` değişkeni `number` olarak tiplendirilmişken, `string` bir değer atanmaya çalışılıyor. Düzeltilmiş hali: `let age: number = 30;`  
3. Fonksiyonun parametre parantezinden sonra `: tip` şeklinde belirtilir. Örnek:  
   ```typescript
   function topla(a: number, b: number): number {
     return a + b;
   }
   ```  
4. Evet, hata var. `name` parametresinin tipi belirtilmemiş. Ayrıca `123` gibi bir sayısal değer geçirilmesi de mantıklı değil. Düzeltilmiş hali:  
   ```typescript
   function greet(name: string) {
     console.log("Merhaba, " + name);
   }

   greet("Ayşe");
   ```  
5. `any` veri tipi, tip güvenliğini ortadan kaldırır ve TypeScript'in sağladığı avantajları azaltır. Derleme zamanında tip hatalarını yakalama yeteneğini kaybederiz.

## Değerlendirme:

- **5 doğru cevap**: Mükemmel! TypeScript temellerini çok iyi anlamışsın.  
- **3-4 doğru cevap**: İyi! Temel kavramları anlamışsın, ancak biraz daha pratik yapmalısın.  
- **1-2 doğru cevap**: Geliştirmen gereken alanlar var. Önceki adımlara geri dönerek tekrar gözden geçir.  
- **0 doğru cevap**: Endişelenme! TypeScript öğrenme yolculuğunun başındasın. Adımları tekrar takip et ve bol bol pratik yap.

## Örnekler

### Örnek 1:  
TypeScript'te değişken tanımlama ve tiplendirme bilgisini ölçmek için bir test yazılabilir. Örneğin, "Aşağıdaki kod bloğunda hangi veri tipi kullanılmıştır?" gibi sorular sorulabilir.

### Örnek 2:  
Bir fonksiyonun parametre tiplerini ve geri dönüş tipini doğru bir şekilde tanımlama yeteneğini test etmek için bir senaryo oluşturulabilir. Örneğin, "İki sayıyı toplayan ve sonucu dönen bir TypeScript fonksiyonu yazın" gibi bir soru sorulabilir.

### Örnek 3:  
TypeScript'in arayüzlerini (interfaces) anlama düzeyini ölçmek için, "Bir arayüz tanımlayın ve bu arayüzü kullanan bir nesne oluşturun" gibi bir görev verilebilir.

### Örnek 4:  
TypeScript'teki sınıfların ve nesnelerin kullanımını değerlendirmek için, "Bir sınıf tanımlayın, özellikler ekleyin ve bu sınıftan bir nesne oluşturun" gibi bir soru sorulabilir.

### Örnek 5:  
`any` veri tipinin kullanımının sonuçlarını ve potansiyel risklerini anlama düzeyini test etmek için, "`any` veri tipinin kullanılmasının ne gibi sonuçları olabilir?" şeklinde bir soru sorulabilir.

## AI Öğrenme İpuçları  
💡 **İpucu**: Değerlendirme sorularını çözerken TypeScript belgelerine ve kaynaklarına başvurmaktan çekinmeyin. Bu, öğrenme sürecinizi destekleyecektir.  

💡 **İpucu**: Cevaplarınızı yazarken, sadece doğru cevabı vermekle kalmayın, aynı zamanda neden o cevabı verdiğinizi de açıklayın. Bu, kavramları daha derinlemesine anlamanıza yardımcı olacaktır.  

💡 **İpucu**: Eğer bir soruyu çözmekte zorlanıyorsanız, soruyu parçalara ayırın ve her bir parçayı ayrı ayrı düşünün. Bu, problemi daha yönetilebilir hale getirecektir.  

💡 **İpucu**: Cevaplarınızı kontrol ettikten sonra, yanlış cevapladığınız soruları tekrar gözden geçirin ve neden yanlış yaptığınızı anlamaya çalışın. Bu, gelecekte aynı hataları yapmanızı engelleyecektir.  

💡 **İpucu**: Değerlendirme sonuçlarınızı bir öğrenme fırsatı olarak görün. Hangi konularda daha fazla pratik yapmanız gerektiğini belirleyin ve bu konulara odaklanın.