import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CreditCard, 
  Heart, 
  Users, 
  Camera, 
  CheckCircle2, 
  Bus,
  Baby,
  Smile,
  ChevronDown,
  Quote
} from 'lucide-react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { SCHEDULE, PARTNERS, PROJECT_DATE } from './constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-800 overflow-x-hidden">
      
      {/* Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/chura-smile-logo.png"
              alt="Chura Smile Project" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          <Button variant={isScrolled ? 'primary' : 'secondary'} className="!py-2 !px-4 !text-sm md:!text-base">
            申し込みはこちら
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b from-blue-400 via-cyan-300 to-white">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[50vh] h-[50vh] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[50vh] h-[50vh] bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-white/30 backdrop-blur-sm border border-white/50 rounded-full px-6 py-2 mb-6 text-ocean-deep font-bold shadow-sm"
          >
            障がい児とその家族限定特別企画
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-lg mb-4 leading-tight"
          >
            <span className="block text-2xl md:text-4xl mb-2 text-blue-900">介護タクシーを貸し切り</span>
            美ら海水族館に<br/>
            いこう！
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/90 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto mt-8 border-4 border-ocean-light transform -rotate-1"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-ocean-deep font-bold">
              <div className="flex items-center gap-2 text-2xl">
                <Calendar className="text-ocean-main" />
                {PROJECT_DATE}
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-300"></div>
              <div className="text-xl bg-sun-yellow text-slate-900 px-4 py-1 rounded-full transform rotate-2 shadow-sm">
                参加費無料 ※
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <Button className="text-xl md:text-2xl px-12 py-6 shadow-2xl shadow-blue-500/30">
              プロジェクトに参加する
            </Button>
            <p className="mt-4 text-white font-bold drop-shadow-md">
              <ChevronDown className="inline-block animate-bounce" /> 詳細をチェック
            </p>
          </motion.div>
        </div>
      </div>

      {/* Emotional Story Section */}
      <Section bgColor="bg-gradient-to-br from-slate-900 to-blue-900" className="text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 w-full"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6">このプロジェクトに込めた想い</h2>
            <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto space-y-20 px-4">
            
            {/* Context */}
            <div className="text-center leading-loose text-lg md:text-xl font-medium text-blue-50">
              <p className="mb-8">
                青く美しい海、温かい人々、豊かな自然。<br/>
                沖縄は日本を代表する観光地として、<br className="hidden md:block"/>
                多くの人々に笑顔と思い出を届けています。
              </p>
              <div className="my-8 flex items-center justify-center gap-4 opacity-50">
                <div className="h-px w-12 bg-white"></div>
                <div className="h-2 w-2 rounded-full bg-white"></div>
                <div className="h-px w-12 bg-white"></div>
              </div>
              <p className="mb-4">
                しかし、<br/>
                その美しい景色の裏側には、見えない現実があります。
              </p>
              <p className="font-bold text-white text-2xl">
                離婚、貧困、障がい——
              </p>
              <p>
                様々な困難を抱えながら、<br/>
                日々を懸命に生きているご家族がいらっしゃいます。
              </p>
            </div>

            {/* Voice */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 relative">
              <Quote className="absolute top-6 left-6 text-cyan-400/20 w-16 h-16 transform -scale-x-100" />
              <div className="relative z-10 text-center">
                <h3 className="text-cyan-300 font-bold mb-8 tracking-widest text-sm md:text-base">
                  — 障がいを持って生まれた子を持つ、ある家族の声 —
                </h3>
                <div className="space-y-6 font-serif italic text-lg md:text-2xl leading-relaxed text-white/90">
                  <p>「他の子と同じように、たくさんの体験をさせてあげたい」</p>
                  <p>「一緒に笑って、たくさんの思い出を作ってあげたい」</p>
                  <p className="text-gray-300 text-base md:text-xl">「でも、普段の生活でいっぱいいっぱいで…なかなか難しい」</p>
                </div>
                <p className="mt-8 text-sm md:text-base text-blue-200 leading-relaxed">
                  日々のケアに追われ、移動の困難さから、<br/>
                  家族での外出を諦めざるを得ない現実があります。
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="text-center space-y-8">
              <div className="inline-block bg-sun-yellow text-slate-900 px-6 py-2 rounded-full font-bold shadow-lg transform -rotate-1">
                私たち介護タクシーにできること
              </div>
              <h3 className="text-2xl md:text-3xl font-bold leading-relaxed">
                これまで「移動の困難」を理由に諦めていた家族旅行。<br/>
                <span className="block text-4xl md:text-5xl mt-6 text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  「美ら海水族館にいこう」
                </span>
              </h3>
              <p className="text-lg text-blue-100">
                介護と移動のプロが、運転から付き添い、写真撮影まで、<br/>
                すべてを全面的にサポートします。
              </p>
            </div>

            {/* Keywords */}
            <div className="flex justify-center gap-6 md:gap-12 py-8">
              {[
                { icon: "✨", label: "夢" },
                { icon: "😊", label: "笑顔" },
                { icon: "💝", label: "思い出" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex flex-col items-center gap-3 bg-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm border border-white/5"
                >
                  <span className="text-4xl md:text-5xl filter drop-shadow-md">{item.icon}</span>
                  <span className="font-bold text-lg md:text-xl">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Core Message */}
            <div className="text-center space-y-10 pt-10 border-t border-white/10">
              <p className="text-2xl md:text-4xl font-bold leading-normal">
                <span className="text-sun-yellow">「移動の壁」</span>で諦めていた家族の夢を、<br/>
                もう一度動かします。
              </p>

              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-cyan-200">
                  夢をあきらめない家族へ。
                </p>
                <p className="text-3xl md:text-5xl font-black text-white mt-4">
                  私たちは、<span className="relative inline-block">
                    笑顔と一緒に走ります。
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-sun-yellow/50 -z-10 rounded-sm transform -rotate-1"></span>
                  </span>
                </p>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </Section>

      {/* Key Points (Cards) */}
      <Section bgColor="bg-blue-50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 relative -mt-32 md:-mt-40 z-20"
        >
          {/* Card 1 */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xl text-center border-b-8 border-ocean-main">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="text-ocean-main w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-ocean-deep mb-2">いつ行くの？</h3>
            <p className="text-gray-500 mb-4 font-bold">開催日</p>
            <div className="text-3xl font-black text-slate-800 bg-gray-100 rounded-lg py-4 border-2 border-dashed border-gray-300">
              <span className="block text-sm text-gray-500 font-normal">2026</span>
              3/21
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xl text-center border-b-8 border-ocean-light">
            <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="text-teal-600 w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-ocean-deep mb-2">いくらかかる？</h3>
            <p className="text-gray-500 mb-4 font-bold">参加費用</p>
            
            <div className="relative">
              <div className="absolute -top-6 -right-2 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm animate-bounce">
                Special!
              </div>
              <div className="text-4xl font-black text-sun-yellow drop-shadow-sm mb-2">
                無料
              </div>
              <ul className="text-left text-sm space-y-2 bg-gray-50 p-4 rounded-lg">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> 移動費（介護タクシー）</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> 水族館入場料</li>
                <li className="flex items-center gap-2 text-slate-400"><CreditCard size={16} /> ランチ等の飲食代は各自</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 shadow-xl text-center border-b-8 border-sun-yellow">
            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-yellow-600 w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-ocean-deep mb-2">対象は？</h3>
            <p className="text-gray-500 mb-4 font-bold">募集要項</p>
            <div className="bg-gray-50 rounded-lg p-4 text-left space-y-3">
              <div className="flex items-start gap-3">
                <Baby className="shrink-0 text-ocean-main mt-1" />
                <span className="font-medium">自立歩行できない児童とそのご家族</span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="shrink-0 text-ocean-main mt-1" />
                <span className="font-medium">1家族4名様まで</span>
              </div>
              <div className="flex items-start gap-3">
                <Bus className="shrink-0 text-ocean-main mt-1" />
                <span className="font-medium">定員：3〜4家族</span>
              </div>
            </div>
             <p className="text-xs text-red-500 mt-2 font-bold">※定員多数の場合は抽選となります</p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Schedule */}
      <Section id="schedule" className="bg-white">
        <div className="text-center mb-12">
          <span className="text-ocean-main font-bold tracking-widest text-sm uppercase">Timetable</span>
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep">当日のスケジュール</h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-blue-100 md:-ml-0.5"></div>

          <div className="space-y-8">
            {SCHEDULE.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-4 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Time Bubble */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-ocean-light z-10 md:-ml-5 flex items-center justify-center">
                  <div className="w-3 h-3 bg-ocean-main rounded-full"></div>
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className={`bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="flex flex-col md:block">
                      <span className="inline-block px-3 py-1 bg-ocean-deep text-white text-sm font-bold rounded-full mb-2 md:mb-1 w-fit">
                        {item.time}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{item.activity}</h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Requirements & Conditions */}
      <Section bgColor="bg-yellow-50">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-4 border-yellow-200">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-8 flex items-center justify-center gap-3">
            <CheckCircle2 className="text-green-500" size={32} />
            参加条件・確認事項
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-ocean-deep border-b-2 border-ocean-light pb-2 mb-4">
                募集について
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
                  <p>募集定員は3〜4家族です。申し込み多数の場合は<span className="font-bold text-red-500">抽選</span>とさせていただきます。</p>
                </li>
                <li className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
                  <p>参加費（移動費・水族館入場料）は無料です。</p>
                </li>
                <li className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">3</div>
                  <p>現地での飲食代やお土産代などは、各ご家庭でのご負担となります。</p>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-ocean-deep border-b-2 border-ocean-light pb-2 mb-4">
                ご協力のお願い
              </h3>
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <div className="flex items-start gap-3 text-red-800 font-bold mb-2">
                   <Camera className="shrink-0 mt-1" />
                   SNS・HPへの写真掲載について
                </div>
                <p className="text-sm text-red-700 leading-relaxed">
                  本プロジェクトは多くの支援によって成り立っています。活動報告のため、当日の様子（お顔が写っている写真・動画）をSNSやホームページへ掲載可能なご家族を対象とさせていただきます。
                </p>
                <div className="mt-2 text-center text-red-600 text-xs font-bold">
                  （顔出しOK・ご了承いただける方）
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section className="text-center">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Presented by</h3>
        <h2 className="text-2xl font-bold text-ocean-deep mb-8">協力事業所</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {PARTNERS.map((partner, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-100 px-6 py-4 rounded-xl shadow-sm flex flex-col items-center min-w-[200px]">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <Bus className="text-gray-500" />
              </div>
              <span className="font-bold text-lg text-slate-700">{partner.name}</span>
              <span className="text-xs text-gray-500">{partner.role}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer / CTA */}
      <footer className="bg-ocean-deep text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ocean-light via-white to-ocean-light"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">一緒に笑顔になりましょう</h2>
          <p className="text-blue-100 mb-10 text-lg">
            定員に達し次第、受付を終了する場合がございます。<br/>
            お早めにお申し込みください。
          </p>
          
          <Button variant="secondary" className="text-xl md:text-2xl px-12 py-5 shadow-2xl hover:shadow-white/20" fullWidth={true}>
            今すぐ申し込む（Googleフォーム）
          </Button>

          <div className="mt-12 pt-8 border-t border-white/10 text-sm text-blue-200">
            <p className="font-bold text-lg mb-2">Chura Smile Project</p>
            <p>© 2026 Chura Smile Project. All Rights Reserved.</p>
          </div>
        </div>

        {/* Decorative footer fish */}
        <div className="absolute bottom-4 right-4 text-white/10 text-9xl">🐟</div>
        <div className="absolute top-10 left-10 text-white/5 text-8xl">🐠</div>
      </footer>
    </div>
  );
};

export default App;
