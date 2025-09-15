
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Instagram } from "lucide-react";

const VideoSection = () => {
  const videos = [
    {
      id: "instagram-1",
      title: "Como Funciona a Compra Programada",
      description: "Veja como é simples adquirir seu veículo sem entrada e sem análise de crédito",
      thumbnail: "/lovable-uploads/5a6bc63b-d069-4eed-9c24-87f90d955a47.png",
      platform: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/reel/DN5kfl3DVX_/",
      embedId: "",
    },
    {
      id: "instagram-2",
      title: "Depoimentos de Clientes Satisfeitos",
      description: "Conheça histórias reais de quem conquistou o carro dos sonhos",
      thumbnail: "/lovable-uploads/video-thumbnail-middle.jpg",
      platform: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/reel/DOhAmq1kYxl/",
      embedId: "",
    },
    {
      id: "instagram-3",
      title: "Depoimentos de Clientes Satisfeitos",
      description: "Tudo que você precisa saber em poucos minutos",
      thumbnail: "/lovable-uploads/95d4c741-9178-4bc0-b084-d455e056bdeb.png",
      platform: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/primemotorsmt/reel/DOHcuC0DYgp/",
      embedId: "",
    }
  ];

  const handleVideoClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            VEJA NOSSOS VÍDEOS
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Acompanhe nossos reels no Instagram e saiba mais sobre a Compra Programada
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={video.id} className="bg-white/10 backdrop-blur-sm border-gray-700 overflow-hidden card-hover group cursor-pointer"
                    onClick={() => handleVideoClick(video.link)}>
                <div className="relative aspect-[9/16] w-full">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm rounded-full p-2">
                      <video.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-white text-lg">{video.title}</h3>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {video.platform}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    {video.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Assistir no {video.platform}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-primary/20 rounded-2xl border border-primary/30">
            <h3 className="text-xl font-bold mb-4">
              Siga-nos no Instagram
            </h3>
            <p className="text-gray-300 mb-6">
              Fique por dentro de todas as novidades e dicas sobre Compra Programada
            </p>
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => window.open('https://www.instagram.com/primemotorsmt', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Seguir no Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
