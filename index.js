import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CheckCircle, Circle } from "lucide-react";

export default function CTACourseApp() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          As pessoas estão assistindo seus vídeos, mas não engajam e nem visitam seu perfil?
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Você pode estar usando o CTA errado. Aprenda a transformar visualizações em ações com frases mais atrativas.
        </p>
        <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg px-6 py-3 rounded-2xl shadow">
          Quero melhorar meu CTA
        </Button>
      </header>

      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Circle className="text-green-500" /> O que é um CTA?
        </h2>
        <p className="text-gray-700">
          Call to Action (CTA) é uma frase que convida o leitor a agir, como clicar em um link, comentar ou comprar algo.
        </p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Antes e depois</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-bold text-gray-600 flex items-center gap-2">
                <Circle className="text-gray-400" size={16} /> Fraco
              </h3>
              <p className="text-gray-700">Clica no link da bio</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="font-bold text-gray-600 flex items-center gap-2">
                <CheckCircle className="text-green-500" size={16} /> Forte
              </h3>
              <p className="text-gray-700">
                É muito fácil e rápido agendar sua consulta no link que está no meu perfil.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
