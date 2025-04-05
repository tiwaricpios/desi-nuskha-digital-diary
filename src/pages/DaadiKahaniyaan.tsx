
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const DaadiKahaniyaan = () => {
  const { language, t } = useLanguage();

  const stories = [
    {
      id: 1,
      title: language === 'en' ? 'The Magic of Tulsi' : 'तुलसी का जादू',
      summary: language === 'en' 
        ? 'A story about how my grandmother used tulsi to cure a terrible fever.' 
        : 'एक कहानी कि कैसे मेरी दादी ने तुलसी का उपयोग करके एक भयानक बुखार को ठीक किया।',
      content: language === 'en' 
        ? 'When I was just eight years old, I came down with a terrible fever that wouldn\'t break for days. The doctor in our village was away, and my parents were growing increasingly worried. That\'s when my grandmother stepped in with her wisdom. She picked fresh tulsi leaves from our courtyard, crushed them, and mixed them with honey. She fed me this mixture three times a day and applied a paste of tulsi on my forehead. By the third day, my fever had subsided completely. This was my first encounter with the healing power of our traditional remedies.'
        : 'जब मैं महज आठ साल का था, मुझे एक भयानक बुखार हो गया जो कई दिनों तक नहीं उतरा। हमारे गांव का डॉक्टर बाहर गया हुआ था, और मेरे माता-पिता बहुत चिंतित हो रहे थे। तभी मेरी दादी ने अपने ज्ञान के साथ कदम बढ़ाया। उन्होंने हमारे आंगन से ताजे तुलसी के पत्ते तोड़े, उन्हें कुचल दिया, और शहद के साथ मिला दिया। उन्होंने मुझे यह मिश्रण दिन में तीन बार दिया और मेरे माथे पर तुलसी का पेस्ट लगाया। तीसरे दिन तक, मेरा बुखार पूरी तरह से उतर गया था। यह हमारे पारंपरिक उपचारों की चिकित्सा शक्ति के साथ मेरा पहला सामना था।',
      author: language === 'en' ? 'Rajesh Kumar' : 'राजेश कुमार',
      date: '2025-02-15'
    },
    {
      id: 2,
      title: language === 'en' ? 'The Neem Tree Secret' : 'नीम के पेड़ का रहस्य',
      summary: language === 'en' 
        ? 'How my village used neem to overcome a skin disease outbreak.' 
        : 'कैसे मेरे गांव ने त्वचा रोग के प्रकोप को नीम से दूर किया।',
      content: language === 'en' 
        ? 'In the summer of 1975, our small village faced an outbreak of a mysterious skin disease. Many children, including my cousins, developed itchy rashes that spread quickly. The nearest hospital was 30 kilometers away, and many families couldn\'t afford the journey. My grandmother, who was known for her knowledge of medicinal plants, organized the women of the village. They collected neem leaves, boiled them in large pots, and prepared baths for all the affected children. They also made a paste of neem leaves and turmeric for direct application on the rashes. Within a week, the outbreak had subsided, and the children were healing. This incident became legendary in our village, and the old neem tree still stands as a reminder of our traditional wisdom.'
        : 'गर्मी का मौसम था 1975 का, हमारे छोटे गांव में एक रहस्यमय त्वचा रोग का प्रकोप हुआ। कई बच्चों, जिनमें मेरे चचेरे भाई-बहन भी शामिल थे, को खुजली भरे चकत्ते हो गए जो तेजी से फैल रहे थे। निकटतम अस्पताल 30 किलोमीटर दूर था, और कई परिवार यात्रा का खर्च नहीं उठा सकते थे। मेरी दादी, जो औषधीय पौधों के अपने ज्ञान के लिए जानी जाती थीं, ने गांव की महिलाओं को संगठित किया। उन्होंने नीम के पत्ते इकट्ठे किए, उन्हें बड़े बर्तनों में उबाला, और सभी प्रभावित बच्चों के लिए स्नान तैयार किया। उन्होंने चकत्तों पर सीधे लगाने के लिए नीम के पत्तों और हल्दी का पेस्ट भी बनाया। एक सप्ताह के भीतर, प्रकोप कम हो गया था, और बच्चे ठीक हो रहे थे। यह घटना हमारे गांव में किंवदंती बन गई, और पुराना नीम का पेड़ अभी भी हमारे पारंपरिक ज्ञान की याद दिलाता है।',
      author: language === 'en' ? 'Kamla Devi' : 'कमला देवी',
      date: '2025-01-20'
    },
    {
      id: 3,
      title: language === 'en' ? 'Monsoon Memories and Herbs' : 'बरसात की यादें और जड़ी-बूटियां',
      summary: language === 'en' 
        ? 'A story about how traditional herbs protected our family during heavy monsoons.' 
        : 'एक कहानी कि कैसे पारंपरिक जड़ी-बूटियों ने भारी बारिश के दौरान हमारे परिवार की रक्षा की।',
      content: language === 'en' 
        ? 'The monsoons of 1983 were particularly severe in our region. The continuous rainfall for two weeks led to dampness everywhere and created ideal conditions for illnesses to spread. My grandmother was always prepared for such situations. She had dried herbs stored in clay pots for the rainy season. Each morning, she would prepare a special kadha (herbal decoction) with tulsi, ginger, black pepper, and a blend of secret spices that she never fully revealed. Everyone in the family had to drink a small cup of this bitter concoction before stepping out. Despite several families in our neighborhood suffering from seasonal fevers and colds, our family remained remarkably healthy. My grandmother always said, "Nature brings challenges, but also provides solutions if we know where to look."'
        : 'हमारे क्षेत्र में 1983 के मानसून विशेष रूप से गंभीर थे। दो हफ्तों तक लगातार बारिश से हर जगह नमी हो गई थी और बीमारियों के फैलने के लिए आदर्श स्थितियां बन गई थीं। मेरी दादी हमेशा ऐसी स्थितियों के लिए तैयार रहती थीं। उनके पास बारिश के मौसम के लिए मिट्टी के बर्तनों में सूखी जड़ी-बूटियां संग्रहित थीं। हर सुबह, वह तुलसी, अदरक, काली मिर्च और गुप्त मसालों के मिश्रण से एक विशेष काढ़ा (जड़ी-बूटी का काढ़ा) तैयार करती थीं जिसे उन्होंने कभी पूरी तरह से प्रकट नहीं किया। परिवार के हर सदस्य को बाहर निकलने से पहले इस कड़वे काढ़े का एक छोटा कप पीना पड़ता था। हमारे पड़ोस के कई परिवारों के मौसमी बुखार और जुकाम से पीड़ित होने के बावजूद, हमारा परिवार उल्लेखनीय रूप से स्वस्थ रहा। मेरी दादी हमेशा कहती थीं, "प्रकृति चुनौतियां लाती है, लेकिन समाधान भी प्रदान करती है अगर हमें पता हो कि कहां देखना है।"',
      author: language === 'en' ? 'Sunita Sharma' : 'सुनीता शर्मा',
      date: '2025-03-05'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-handwritten text-mitti mb-6">
            {language === 'en' ? 'Daadi Ki Kahaniyaan' : 'दादी की कहानियां'}
          </h1>
          <p className="text-mitti/80 mb-8">
            {language === 'en' 
              ? 'Stories passed down through generations, celebrating our heritage of traditional knowledge and family wisdom.'
              : 'पीढ़ियों से चली आ रही कहानियां, हमारे पारंपरिक ज्ञान और पारिवारिक बुद्धिमत्ता की विरासत का जश्न मनाती हैं।'
            }
          </p>
          
          <div className="space-y-8">
            {stories.map((story) => (
              <Card key={story.id} className="border-mitti/10 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-medium text-mitti">{story.title}</CardTitle>
                  <CardDescription className="text-mitti/60">
                    <span>{story.author}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={story.date}>
                      {new Date(story.date).toLocaleDateString(
                        language === 'en' ? 'en-US' : 'hi-IN', 
                        { year: 'numeric', month: 'long', day: 'numeric' }
                      )}
                    </time>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-mitti/80 font-medium mb-4">{story.summary}</p>
                  <Separator className="my-4" />
                  <p className="text-mitti/80 leading-relaxed">{story.content}</p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <button className="text-spice hover:text-spice/80 text-sm font-medium">
                    {language === 'en' ? 'Read more' : 'और पढ़ें'} →
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DaadiKahaniyaan;
