"use client";

import { Button } from "@/components/ui";
import { Link } from "@/lib/translation";

export default function UpcomingGames() {
  return (
    <div className="grow mt-6 md:mt-10">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">Aktuelle Spiele</div>
        <Button asChild variant="outline">
          <Link href="/">Alle Spiele</Link>
        </Button>
      </div>
      <div>
        <div className="flex items-center border border-b-0 rounded rounded-b-none px-5 py-3 justify-between">
          <div>
            <div className="text-sm font-semibold text-neutral-500">
              Match Datum
            </div>
            <div className="font-semibold">28.09.</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">Teams</div>
            <div className="font-semibold">FC Schmitten - CF Schönberg</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">Tipp</div>
            <div className="font-semibold">-</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">
              Resultat
            </div>
            <div className="font-semibold">-</div>
          </div>
          <div>
            <Button variant="outline" size="sm">
              Tipp Abgeben
            </Button>
          </div>
        </div>
        <div className="flex items-center border border-b-0 rounded rounded-b-none px-5 py-3 justify-between">
          <div>
            <div className="text-sm font-semibold text-neutral-500">
              Match Datum
            </div>
            <div className="font-semibold">21.09.</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">Teams</div>
            <div className="font-semibold">FC Schmitten - SC Düdingen 2</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">Tipp</div>
            <div className="font-semibold">0 - 1</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">
              Resultat
            </div>
            <div className="font-semibold">-</div>
          </div>
          <div>
            <Button variant="outline" size="sm">
              Tipp Ändern
            </Button>
          </div>
        </div>
        <div className="flex items-center border border-b-0 rounded rounded-b-none px-5 py-3 justify-between bg-neutral-50">
          <div>
            <div className="text-sm font-semibold text-neutral-500">
              Match Datum
            </div>
            <div className="font-semibold">14.09.</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">Teams</div>
            <div className="font-semibold">FC Cressier - FC Schmitten</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">Tipp</div>
            <div className="font-semibold">0 - 1</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">
              Resultat
            </div>
            <div className="font-semibold">0 - 2</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">
              Punkte Erhalten
            </div>
            <div className="font-semibold">150</div>
          </div>
        </div>
        <div className="flex items-center border rounded rounded-t-none px-5 py-3 justify-between bg-neutral-50">
          <div>
            <div className="text-sm font-semibold text-neutral-500">
              Match Datum
            </div>
            <div className="font-semibold">07.09.</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">Teams</div>
            <div className="font-semibold">FC Schmitten - FC Sense</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">Tipp</div>
            <div className="font-semibold">3 - 2</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">
              Resultat
            </div>
            <div className="font-semibold">1 - 1</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-500">
              Punkte Erhalten
            </div>
            <div className="font-semibold">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
