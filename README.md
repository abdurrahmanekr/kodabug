# Kodabug
Bu Repo'ya 2017 yılında başlamıştım. Bu uygulama yazılımcılar için üretilmek istenmiş [Trivia Crack](https://tr.wikipedia.org/wiki/Trivia_Crack) benzeri bir oyun uygulamasıdır. Ancak bunun üzerinden epey vakit geçmiş ve artık üzerinde bir değişiklik yapma ihtimali kalmamıştır.

## Açık kaynak katkısı ve toplumun faydalanması
Bu repo içerisinde bir oyuncunun başka bir oyuncu ile eşleşmesini ve bunu yapmak için php alt yapısını kullandığını göreceksiniz. O zamanlar php'de async bir iş çalıştırmak session mekanizması yüzünden mümkün değildi. Çünkü bir başkasına response verebilmek için session dosyasındaki lock'ı kaldırması gerekiyordu. Bundan dolayı da bir başkası istek atınca bir önceki response'u beklemeliydi. Aslında reponun geleceğini bu sorun etkilemişti. Elbette oturum işlerini bir redis veya lock olmayacağı düşünülen bir yapıda yapılabilirdi. Ancak benim teknik yeterliliğim o zaman bunu başarabilecek kapasitede değildi.

Her ne olumsuz şeyler yaşanmış olsa da, en azından çabalanmış ve hatalarla dolu bir tecrübe yatıyor bu projede. Eğer sizin de bir projeniz teknik aksaklık nedeniyle yarıda kalıyor veya bitemiyorsa bunun için üzgünüm. Keşke derin teknik sorunları konuşacak bir grubumuz olsaydı. Günümüzde yapay zeka bu tür sorunları çözmek için çok yardımcı oluyor. Siz yine de topluma fayda sağlaması için [abdurrahmanekr/bana-istedigini-sor](https://github.com/abdurrahmanekr/bana-istedigini-sor) buraya uygulamayı iyi bir noktaya getirdikten sonra işiniz tıkayan bilinmezlikleri çözmek için bir issue açın. İnsanlığa yardım çoğumuzun gözardı ettiği bir şey. Ancak kişi kendinden bilir işi diyerek, çorbaya tuzumu ekliyorum. Verimli bir ömür geçirmeniz dileğiyle.

### Uygulamanın görünümü
Uygulamanın kayıt sayfasından kullanılan diğer sayfalara kadar ironilerle dolu olduğunu göreceksiniz. Örneğin kayıt olurken insert diyor, hata alırsa catch'e düşüyor. Eğer ortaya çıkmış olsaydı community için de faydalı olurdu. Herkes kendince test başlatırdı birbiriyle yarışırdı. Bir zamanlar viral olan bir uygulamanın çin malı kopyasını andırıyor olsa da yapılsaydı bence güzel olurdu <3

![kodabug](https://user-images.githubusercontent.com/15075759/27506842-01728c02-58cb-11e7-98f2-cb56f4f4f37e.gif)
