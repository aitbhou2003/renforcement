<?php

class Cinema
{
    private array $salles;

    public function __construct()
    {
        $this->salles = [];
    }

    public function ajouterSalle($nom, $nbPlaces)
    {
        foreach ($this->salles as $salle) {
            if ($salle['nom'] == $nom) {
                return 'sale deja exist';
            }
        }
        array_push($this->salles, ['nom' => $nom, 'nombre places' => $nbPlaces, 'reservations' => []]);
        return 'la salle ajouter avect secce';
    }

    public function reserver($nomSalle, $nomClient, $nbPlaces)
    {
        for ($i = 0; $i < count($this->salles); $i++) {
            if ($this->salles[$i]['nom'] == $nomSalle) {
                if ($this->salles[$i]['nombre places'] < $nbPlaces || $nbPlaces <= 0) {
                    return "cette place n'exist pas ";
                }
                foreach ($this->salles[$i]['reservations'] as $reservation) {
                    if ($reservation['nombre place'] == $nbPlaces) {
                        return 'le place est occupe';
                    }
                }
                array_push($this->salles[$i]['reservations'], ['client' => $nomClient, 'place' => $nbPlaces]);
                return 'reservation passer avec succes';
            }
        }
    }

    public function annulerReservation($nomSalle, $nomClient)
    {
        for ($i = 0; $i < count($this->salles); $i++) {
            if ($this->salles[$i]['nom'] == $nomSalle) {
                for ($j = 0; $j < count($this->salles[$i]['reservations']); $j++) {
                    if ($this->salles[$i]['reservations'][$j]['client'] == $nomClient) {
                        unset($this->salles[$i]['reservations'][$j]);
                        return 'reservation annuller avec succeess';
                    }
                }
            }
        }
        return "reservation n'exist pas";
    }

    public function afficherOccupation()
    {
        foreach ($this->salles as $salle) {
            $prise = count($salle['reservations']);
            echo $salle['nom'] .' totale place prises : ' . $prise . " le pourcentage d'occupation " . (($prise * 100) / $salle['nombre places']).'% <br>';
        }
    }

    public function getRevenusEstimes($prixBillet)
    {
        $somme = 0;
        foreach ($this->salles as $salle) {
            $somme += (count($salle['reservations']) * $prixBillet);
        }
        return $somme;
    }
}


$cinema = new Cinema();

$cinema->ajouterSalle('salle_1', 20);
$cinema->ajouterSalle('salle_2', 30);
$cinema->ajouterSalle('salle_3', 40);

$cinema->reserver('salle_1', 'abdellah', 12);
$cinema->reserver('salle_1', 'ahemd', 1);
$cinema->reserver('salle_1', 'karim', 19);
$cinema->reserver('salle_2', 'amal', 23);
$cinema->reserver('salle_2', 'said', 5);
$cinema->reserver('salle_2', 'bhou', 13);
$cinema->reserver('salle_2', 'amin', 19);
$cinema->reserver('salle_3', 'hnia', 10);
$cinema->reserver('salle_3', 'hanane', 14);
$cinema->reserver('salle_3', 'rida', 39);

$cinema->annulerReservation('salle_2','amal');
echo $cinema->afficherOccupation();
'<br>';
echo $cinema->getRevenusEstimes(10);




echo '<pre>';
var_dump($cinema);
echo '</pre>';
