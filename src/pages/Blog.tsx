
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Blog = () => {
  const { language, t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: language === 'en' ? 'The Science Behind Traditional Remedies' : 'पारंपरिक उपचारों के पीछे का विज्ञान',
      excerpt: language === 'en' 
        ? 'Modern research confirms what our ancestors already knew about the medicinal properties of common kitchen ingredients.' 
        : 'आधुनिक शोध की पुष्टि करता है कि हमारे पूर्वजों को पहले से ही सामान्य रसोई सामग्री के औषधीय गुणों के बारे में पता था।',
      content: language === 'en' 
        ? 'Recent studies have shown that many traditional Indian remedies have scientific basis for their effectiveness. For example, turmeric contains curcumin, which has powerful anti-inflammatory and antioxidant properties. Similarly, the antibacterial properties of neem have been confirmed in numerous studies, validating its traditional use in treating skin conditions and infections...' 
        : 'हाल के अध्ययनों से पता चला है कि कई पारंपरिक भारतीय उपचारों के प्रभावशीलता के लिए वैज्ञानिक आधार है। उदाहरण के लिए, हल्दी में करक्यूमिन होता है, जिसमें शक्तिशाली एंटी-इंफ्लेमेटरी और एंटीऑक्सीडेंट गुण होते हैं। इसी तरह, नीम के एंटीबैक्टीरियल गुणों की पुष्टि कई अध्ययनों में की गई है, जो त्वचा की स्थिति और संक्रमण के इलाज में इसके पारंपरिक उपयोग को मान्य करती है...',
      author: language === 'en' ? 'Dr. Anjali Sharma' : 'डॉ. अंजलि शर्मा',
      category: language === 'en' ? 'Health' : 'स्वास्थ्य',
      date: '2025-04-02'
    },
    {
      id: 2,
      title: language === 'en' ? 'How Traditional Cooking Methods Enhance Nutrition' : 'कैसे पारंपरिक खाना पकाने के तरीके पोषण को बढ़ाते हैं',
      excerpt: language === 'en' 
        ? 'The wisdom in cooking techniques passed down through generations that maximize the nutritional value of food.' 
        : 'पीढ़ियों से चली आ रही खाना पकाने की तकनीकों में जो ज्ञान है वह भोजन के पोषण मूल्य को अधिकतम करता है।',
      content: language === 'en' 
        ? 'Traditional Indian cooking techniques like fermentation (making dosas, idlis), tempering spices, and slow cooking have been scientifically proven to enhance the bioavailability of nutrients. For instance, fermenting lentils and rice not only improves digestion but also increases the availability of proteins and vitamins. Similarly, cooking certain vegetables with a small amount of oil helps in the absorption of fat-soluble vitamins...' 
        : 'फर्मेंटेशन (डोसा, इडली बनाना), मसालों को तड़का लगाना, और धीमी आंच पर पकाने जैसी पारंपरिक भारतीय खाना पकाने की तकनीकों को वैज्ञानिक रूप से पोषक तत्वों की जैव-उपलब्धता को बढ़ाने के लिए सिद्ध किया गया है। उदाहरण के लिए, दालों और चावल को फेरमेंट करने से न केवल पाचन में सुधार होता है बल्कि प्रोटीन और विटामिन की उपलब्धता भी बढ़ जाती है। इसी तरह, कुछ सब्जियों को थोड़े से तेल के साथ पकाने से वसा में घुलनशील विटामिन के अवशोषण में मदद मिलती है...',
      author: language === 'en' ? 'Priya Patel' : 'प्रिया पटेल',
      category: language === 'en' ? 'Nutrition' : 'पोषण',
      date: '2025-03-28'
    },
    {
      id: 3,
      title: language === 'en' ? 'Sustainable Living Through Traditional Practices' : 'पारंपरिक प्रथाओं के माध्यम से टिकाऊ जीवन',
      excerpt: language === 'en' 
        ? 'How our ancestors\' eco-friendly practices are more relevant than ever in today\'s environmental crisis.' 
        : 'कैसे हमारे पूर्वजों की पर्यावरण अनुकूल प्रथाएं आज के पर्यावरण संकट में पहले से कहीं अधिक प्रासंगिक हैं।',
      content: language === 'en' 
        ? 'The traditional practices of our ancestors were inherently sustainable. From using clay pots that naturally cooled water without electricity to planting specific trees around homes for natural cooling, these practices minimized resource consumption. Additionally, the use of biodegradable materials like leaf plates and clay cups, natural cleaning agents like shikakai and reetha, and water conservation methods such as step wells show a deep understanding of living in harmony with nature...' 
        : 'हमारे पूर्वजों की पारंपरिक प्रथाएं अंतर्निहित रूप से टिकाऊ थीं। बिजली के बिना पानी को स्वाभाविक रूप से ठंडा करने वाले मिट्टी के बर्तनों के उपयोग से लेकर प्राकृतिक शीतलन के लिए घरों के चारों ओर विशिष्ट पेड़ लगाने तक, इन प्रथाओं ने संसाधन खपत को कम किया। इसके अतिरिक्त, पत्तल और मिट्टी के कप जैसी जैव-निम्नीकरणीय सामग्रियों का उपयोग, शिकाकाई और रीठा जैसे प्राकृतिक सफाई एजेंट, और बावड़ी जैसी जल संरक्षण विधियां प्रकृति के साथ सामंजस्य में रहने की गहरी समझ दिखाती हैं...',
      author: language === 'en' ? 'Arjun Reddy' : 'अर्जुन रेड्डी',
      category: language === 'en' ? 'Sustainability' : 'स्थिरता',
      date: '2025-03-15'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-handwritten text-mitti mb-6">
            {language === 'en' ? 'Blog' : 'ब्लॉग'}
          </h1>
          <p className="text-mitti/80 mb-8">
            {language === 'en' 
              ? 'Discover articles about traditional wisdom, modern research, and the intersection of both.'
              : 'पारंपरिक ज्ञान, आधुनिक शोध और दोनों के मिलन के बारे में लेख खोजें।'
            }
          </p>
          
          <div className="space-y-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white border border-mitti/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Badge variant="outline" className="bg-spice/10 text-spice border-spice/20">
                    {post.category}
                  </Badge>
                </div>
                <h2 className="text-xl md:text-2xl font-medium text-mitti mb-2">{post.title}</h2>
                <div className="flex items-center text-sm text-mitti/60 mb-4">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(
                      language === 'en' ? 'en-US' : 'hi-IN', 
                      { year: 'numeric', month: 'long', day: 'numeric' }
                    )}
                  </time>
                </div>
                <p className="text-mitti/80 font-medium mb-4">{post.excerpt}</p>
                <Separator className="my-4" />
                <p className="text-mitti/80 leading-relaxed">{post.content}</p>
                <div className="mt-6 flex justify-end">
                  <button className="text-spice hover:text-spice/80 text-sm font-medium">
                    {language === 'en' ? 'Read full article' : 'पूरा लेख पढ़ें'} →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
