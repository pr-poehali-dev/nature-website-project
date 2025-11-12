import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const articles = [
    {
      id: 1,
      title: 'Лесные экосистемы',
      excerpt: 'Леса занимают около 30% суши Земли и являются домом для 80% наземных видов животных, растений и насекомых. Они играют важнейшую роль в регулировании климата.',
      image: 'https://cdn.poehali.dev/projects/cf1c2dff-2bc5-459a-9439-3a8064a8a249/files/ee1dbf43-a75b-4f53-9505-6fddae0a47a3.jpg',
      date: '15 марта 2024'
    },
    {
      id: 2,
      title: 'Горные вершины',
      excerpt: 'Горные экосистемы обеспечивают пресной водой половину населения планеты. Альпийские луга богаты уникальными видами растений, приспособленных к суровым условиям.',
      image: 'https://cdn.poehali.dev/projects/cf1c2dff-2bc5-459a-9439-3a8064a8a249/files/48e91775-cac1-4703-9884-268321987fed.jpg',
      date: '10 марта 2024'
    },
    {
      id: 3,
      title: 'Океанские просторы',
      excerpt: 'Мировой океан производит более половины кислорода на Земле и поглощает около 30% углекислого газа. Береговые экосистемы защищают сушу от эрозии.',
      image: 'https://cdn.poehali.dev/projects/cf1c2dff-2bc5-459a-9439-3a8064a8a249/files/d6467ed3-348e-457b-be96-90f15b084f26.jpg',
      date: '5 марта 2024'
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/cf1c2dff-2bc5-459a-9439-3a8064a8a249/files/ee1dbf43-a75b-4f53-9505-6fddae0a47a3.jpg',
    'https://cdn.poehali.dev/projects/cf1c2dff-2bc5-459a-9439-3a8064a8a249/files/48e91775-cac1-4703-9884-268321987fed.jpg',
    'https://cdn.poehali.dev/projects/cf1c2dff-2bc5-459a-9439-3a8064a8a249/files/d6467ed3-348e-457b-be96-90f15b084f26.jpg'
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">Мир Природы</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Исследуйте красоту и гармонию естественных экосистем нашей планеты
          </p>
        </div>
      </header>

      <nav className="sticky top-0 bg-card border-b border-border z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex gap-8 justify-center">
            <a href="#articles" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="BookOpen" size={20} />
              <span className="font-medium">Статьи</span>
            </a>
            <a href="#gallery" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Image" size={20} />
              <span className="font-medium">Галерея</span>
            </a>
            <a href="#contact" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Icon name="Mail" size={20} />
              <span className="font-medium">Контакты</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section id="articles" className="mb-24 scroll-mt-20">
          <div className="flex items-center gap-3 mb-10">
            <Icon name="BookOpen" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Статьи</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card 
                key={article.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{article.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                  <Button variant="link" className="mt-4 px-0 text-primary font-medium">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="gallery" className="mb-24 scroll-mt-20">
          <div className="flex items-center gap-3 mb-10">
            <Icon name="Image" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Галерея</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-lg group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={image} 
                  alt={`Природа ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-20">
          <div className="flex items-center gap-3 mb-10">
            <Icon name="Mail" size={32} className="text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Контакты</h2>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-8 text-center">
                Свяжитесь с нами, если у вас есть вопросы или предложения
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя
                  </label>
                  <Input 
                    id="name"
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Ваше сообщение..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 px-6 mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm opacity-90">
            © 2024 Мир Природы. Сохраним планету вместе.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
