
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const DaadiDiary = () => {
  const { language, t } = useLanguage();

  const diaryEntries = [
    {
      id: 1,
      title: language === 'en' ? 'Monsoon Health Tips' : 'बरसात के मौसम के स्वास्थ्य टिप्स',
      date: '2025-03-15',
      content: language === 'en' 
        ? 'During monsoon, I always make sure my family drinks tulsi and ginger tea to boost immunity. It helps prevent seasonal colds and infections that are common in rainy weather.'
        : 'बरसात के मौसम में, मैं हमेशा अपने परिवार को प्रतिरक्षा बढ़ाने के लिए तुलसी और अदरक की चाय पिलाती हूं। यह मौसमी सर्दी और संक्रमण को रोकने में मदद करता है जो बारिश के मौसम में आम हैं।',
      author: language === 'en' ? 'Daadi Jamuna' : 'दादी जमुना'
    },
    {
      id: 2,
      title: language === 'en' ? 'Summer Cooling Remedies' : 'गर्मी से बचने के घरेलू उपाय',
      date: '2025-02-28',
      content: language === 'en'
        ? 'In the scorching summer heat, I always prepared homemade aam panna for my grandchildren. Made from raw mangoes, mint, and jaggery, it not only tastes delicious but also prevents heat stroke and keeps the body cool.'
        : 'गर्मी की तपती धूप में, मैं हमेशा अपने पोते-पोतियों के लिए घर का बना आम पन्ना तैयार करती थी। कच्चे आम, पुदीने और गुड़ से बना, यह न केवल स्वादिष्ट होता है बल्कि लू लगने से भी बचाता है और शरीर को ठंडा रखता है।',
      author: language === 'en' ? 'Naani Kamla' : 'नानी कमला'
    },
    {
      id: 3,
      title: language === 'en' ? 'Winter Skin Care' : 'सर्दियों में त्वचा की देखभाल',
      date: '2025-01-10',
      content: language === 'en'
        ? 'For dry winter skin, my grandmother taught me to apply a mixture of besan, malai, and a pinch of haldi. This natural pack moisturizes the skin deeply and gives a natural glow. Use it twice a week for best results.'
        : 'सर्दियों की सूखी त्वचा के लिए, मेरी दादी ने मुझे बेसन, मलाई और थोड़ी हल्दी के मिश्रण को लगाना सिखाया। यह प्राकृतिक पैक त्वचा को गहराई से मॉइस्चराइज़ करता है और प्राकृतिक चमक देता है। सर्वोत्तम परिणामों के लिए इसे सप्ताह में दो बार उपयोग करें।',
      author: language === 'en' ? 'Daadi Savitri' : 'दादी सावित्री'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-handwritten text-mitti mb-6">
            {language === 'en' ? 'Daadi Ki Diary' : 'दादी की डायरी'}
          </h1>
          <p className="text-mitti/80 mb-8">
            {language === 'en' 
              ? 'Wisdom and stories from our elders, preserving traditional knowledge for generations to come.'
              : 'हमारे बुजुर्गों की ज्ञान और कहानियां, पारंपरिक ज्ञान को आने वाली पीढ़ियों के लिए संरक्षित करना।'
            }
          </p>
          
          <div className="space-y-10">
            {diaryEntries.map((entry) => (
              <div 
                key={entry.id} 
                className="bg-white border border-mitti/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl md:text-2xl font-medium text-mitti mb-2">{entry.title}</h2>
                <div className="flex items-center text-sm text-mitti/60 mb-4">
                  <span>{entry.author}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={entry.date}>
                    {new Date(entry.date).toLocaleDateString(
                      language === 'en' ? 'en-US' : 'hi-IN', 
                      { year: 'numeric', month: 'long', day: 'numeric' }
                    )}
                  </time>
                </div>
                <Separator className="my-4" />
                <p className="text-mitti/80 leading-relaxed">{entry.content}</p>
                <div className="mt-4 flex justify-end">
                  <button className="text-spice hover:text-spice/80 text-sm font-medium">
                    {language === 'en' ? 'Read more' : 'और पढ़ें'} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DaadiDiary;
