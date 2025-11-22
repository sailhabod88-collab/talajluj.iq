// pages/index.js (Next.js Page Component)
import Head from 'next/head';

// 🛑🛑 التغيير هنا: تم تعديل المسار من '../components/' إلى './' 🛑🛑
import TeacherCard from './TeacherCard'; 
import VideoPlayer from './VideoPlayer'; 

// -- بيانات وهمية للمدرسين (تبقى كما هي)
const teachers = [
    { id: 1, name: 'أ. أحمد علي', subject: 'الرياضيات', description: 'خبير في منهج السادس العلمي' },
    { id: 2, name: 'أ. سارة خالد', subject: 'الكيمياء', description: 'شرح مفصل بأسلوب مبتكر' },
    // ... المزيد من المدرسين
];

export default function HomePage() {
  return (
    <>
      {/* ... باقي الكود يبقى كما هو ... */}
      <Head>
        <title>منصة التعليم الرقمي - الرئيسية</title>
      </Head>

      {/* قسم الترحيب والتعريف */}
      <section className="py-20 bg-gray-50">
        {/* ... */}
      </section>

      {/* قسم اختيار المدرسين */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            👨‍🏫 اختر المدرس المناسب لك
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachers.map(teacher => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* مثال على منطقة عرض فيديو */}
      <section className="py-16 bg-gray-200">
        {/* ... */}
        <div className="max-w-4xl mx-auto px-4">
           <VideoPlayer 
              lectureTitle="محاضرة المتجهات - الفصل الأول" 
              resolutions={[
                { quality: '1080p', url: '/videos/lec1_1080.mp4' },
                { quality: '720p', url: '/videos/lec1_720.mp4' },
                { quality: '360p', url: '/videos/lec1_360.mp4' }
              ]}
           />
        </div>
      </section>
    </>
  );
}
        </h2>
        <div className="max-w-4xl mx-auto px-4">
           {/* المكون الذي يعرض مشغل الفيديو */}
           <VideoPlayer 
              lectureTitle="محاضرة المتجهات - الفصل الأول" 
              resolutions={[
                { quality: '1080p', url: '/videos/lec1_1080.mp4' },
                { quality: '720p', url: '/videos/lec1_720.mp4' },
                { quality: '360p', url: '/videos/lec1_360.mp4' }
              ]}
           />
        </div>
      </section>
    </>
  );
}
