<?php

class Bibliotheque
{
    private array $livres;
    private array $emprunts;

    public function __construct()
    {
        $this->livres = [
            ['titre' => 'titre1', 'auteur' => 'a1', 'disponible' => true],
            ['titre' => 'titre2', 'auteur' => 'a2', 'disponible' => true],
            ['titre' => 'titre3', 'auteur' => 'a3', 'disponible' => true],
            ['titre' => 'titre4', 'auteur' => 'a4', 'disponible' => false]

        ];
    }

    public function emprunter($titre, $emprunteur)
    {
        foreach ($this->livres as $livre) {
            if ($livre['titre'] == $titre) {
                if ($livre['disponible'] != true) {
                    return 'livre pas disponible';
                }
                // $livre['disponible'] = false;
                $this->emprunts[] = [
                    'livre' => $titre,
                    'emprunteur' => $emprunteur,
                    'date_emprunt' => new DateTime(),
                    'date_retour_prevue' => new DateTime('+14 days'),
                    'date_retour_effectif' => null,
                    'amende' => null
                ];
                for ($i = 0; $i < count($this->livres); $i++) {
                    if ($this->livres[$i]['titre'] == $titre) {
                        $this->livres[$i]['disponible'] = false;
                    }
                }
                return 'emprunts passer avec sccess ';
            }
        }

        return 'le livre pas trouver';
    }

    public function retourner($titre)
    {
        foreach ($this->emprunts as &$emprunt) {
            if ($emprunt['livre'] == $titre) {
                $amende = 0;
                $now = new DateTime('+20 days');
                $dif = $emprunt['date_retour_prevue']->diff($now);
                if ($dif->days > 0) {
                    $amende = 0.5 * $dif->days;
                } else {
                    $amende = 0;
                }
                $emprunt['date_retour_effectif'] = $now;
                $emprunt['amende'] = $amende;
                return 'amoude est calculer ';
            }
        }
    }

    public function getAmendes($emprunteur)
    {
        $somme = 0;
        foreach ($this->emprunts as $emprunt) {
            if ($emprunt['emprunteur'] == $emprunteur) {
                $somme += $emprunt['amende'];
            }
        }
        return $somme;
    }
}


$biblio = new Bibliotheque();
$biblio->emprunter('titre1', 'bhou');
$biblio->emprunter('titre2', 'bhou');

$biblio->retourner('titre1');
$biblio->retourner('titre2');

// echo '<pre>';
// var_dump($biblio->retourner('titre1'));
// echo '</pre>';



echo '<pre>';
var_dump($biblio->getAmendes('bhou'));
echo '</pre>';

echo '<pre>';
var_dump($biblio);
echo '</pre>';
