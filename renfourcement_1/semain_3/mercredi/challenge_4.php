<?php

abstract class Transport
{
    protected string $nom;
    protected float $vitesse_max;
    protected int $capacite_passagers;
    protected float $consommation;

    public function __construct(string $nom, float $vitesse_max, int  $capacite_passagers, float $consommation)
    {
        $this->nom                 = $nom;
        $this->vitesse_max         = $vitesse_max;
        $this->capacite_passagers  = $capacite_passagers;
        $this->consommation        = $consommation;
    }
    public function tempsTrajet(float $distanceKm)
    {
        return $distanceKm / $this->vitesse_max;
    }

    public function getNom()
    {
        return $this->nom;
    }

    abstract public function calculerCoutTrajet(float $distanceKm);
}

class voiture extends Transport
{
    public float $prix_carburant = 1.8;

    public function __construct()
    {
        return parent::__construct('voiture', 140, 4, 7);
    }
    public function calculerCoutTrajet(float $distanceKm)
    {
        $littres = ($this->consommation * $distanceKm) / 100;
        $prix_totale = $littres * $this->prix_carburant;
        $per_persson = $prix_totale / $this->capacite_passagers;
        return $per_persson;
    }
}


class Train extends Transport
{
    public float $prix_elctricite = 0.15;

    public function __construct()
    {
        return parent::__construct('Train', '320', '300', '30');
    }

    public function calculerCoutTrajet(float $distanceKm)
    {
        $kwts = ($this->consommation * $distanceKm) / 100;
        $prix_totale = $kwts * $this->prix_elctricite;
        $per_person = $prix_totale / $this->capacite_passagers;
        return $per_person;
    }
}


class Avion  extends Transport
{
    public float $prix_lerosine = 2.5;

    public function __construct()
    {
        return parent::__construct('Avion', '900', '800', '250');
    }

    public function calculerCoutTrajet(float $distanceKm)
    {
        $littres = ($this->consommation * $distanceKm) / 100;
        $prix_totale = $littres * $this->prix_lerosine;
        $per_person = $prix_totale / $this->capacite_passagers;
        return $per_person;
    }
}


$distance   = 775;

$transports = [new voiture(), new Train(), new Avion()];

$plus_rapide = null;
$moins_cher  = null;

foreach ($transports as $t) {
    $temps = $t->tempsTrajet($distance);
    $cout = $t->calculerCoutTrajet($distance);

    $heure = (int)$temps;
    $minut = (int)(($temps - $heure) * 60);

    echo "******************************************** \n";
    echo $t->getNom() . 'tempe :' . $heure . ' h ' . $minut . " min\n";
    echo "cout : " . $cout . "€\n";
    echo "******************************************** \n";

    if ($plus_rapide === null || $temps < $plus_rapide['temps']) {
        $plus_rapide = ['nom' => $t->getNom(), 'temps' => $temps];
    }

    if ($moins_cher === null || $cout < $moins_cher['cout']) {
        $moins_cher = ['nom' => $t->getNom(), 'cout' => $cout];
    }
}


echo "******************************************** \n";
echo "le plus rapide :" . $plus_rapide['nom'] . "\n";
echo "le moins che :" . $moins_cher['nom'] . "\n";
echo "******************************************** \n";
