import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

export default function Bio() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white py-24 px-4">
      <div className="max-w-2xl w-full bg-blue-50 rounded-2xl shadow-md p-8 flex flex-col items-center mb-12">
        <Image
          src="/chris.png"
          alt="Chris Chen"
          width={200}
          height={200}
          className="rounded-full mb-6 shadow-lg object-cover"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Christopher Chen</h1>
        <div className="text-blue-600 font-semibold mb-4 text-center">Founder</div>
        <p className="text-lg text-gray-700 text-center mb-2">
          Chris Chen is a software engineer in recovery who found healing through breath, movement, and meditation. After years of navigating depression, emotional exhaustion, and unhealthy coping habits, he began practicing Sundo — a Korean Taoist meditation — which helped him break free from dependency, come off antidepressants, and reconnect with a sense of purpose.
        </p>
        <p className="text-lg text-gray-700 text-center mb-2">
          Through this journey, Chris realized that recovery isn't just about letting go of what harms us — it's about rediscovering our love for ourselves.
        </p>
        <p className="text-lg text-gray-700 text-center mb-2">
          He founded the One Song Foundation so that everyone — regardless of background, status, or resources — could have equal access to excellent care. With a background in blockchain and fintech, and a deep personal commitment to recovery, Chris is building bridges between ancient wisdom and modern tools to help others rediscover their rhythm — their one song.
        </p>
        <a href="https://www.linkedin.com/in/cchen408/" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
          <FaLinkedin className="text-2xl" />
          <span className="text-lg">LinkedIn</span>
        </a>
      </div>
      <div className="max-w-2xl w-full bg-blue-50 rounded-2xl shadow-md p-8 flex flex-col items-center">
        <Image
          src="/carl.png"
          alt="Carl's Photo"
          width={200}
          height={200}
          className="rounded-full mb-6 shadow-lg object-cover"
        />
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Carl Gish</h1>
        <div className="text-blue-600 font-semibold mb-4 text-center">Cofounder</div>
        <p className="text-lg text-gray-700 text-center mb-2">
          Carl is a valued member of the One Song Foundation team. His commitment to service and his compassionate spirit help drive the mission forward every day.
        </p>
        <a href="https://www.linkedin.com/in/carlgish/" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors">
          <FaLinkedin className="text-2xl" />
          <span className="text-lg">LinkedIn</span>
        </a>
      </div>
    </main>
  );
} 