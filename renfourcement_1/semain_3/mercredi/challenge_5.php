<?php

abstract class Employe
{
    protected string $nom;
    protected string $prenom;
    protected DateTime $date_embauche;
    protected float $salaire_base;

    public function __construct(string $nom, string $prenom, DateTime $date_embauche, float $salaire_base)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->date_embauche = $date_embauche;
        $this->salaire_base = $salaire_base;
    }

    public function anciennete()
    {
        $now = new DateTime();
        $dif = $this->date_embauche->diff($now);
        return $dif->y;
    }

    abstract public function calculerSalaire();
}

class Developpeur extends Employe
{
    public function __construct(string $nom, string $prenom, DateTime $date_embauche, float $salaire_base)
    {
        return parent::__construct($nom, $prenom, $date_embauche, $salaire_base);
    }
    public function calculerSalaire()
    {
        $y = $this->anciennete();
        $total_years = $y * $this->salaire_base;
        $bonus = $y * 500;
        $prims = null;
        if ($y > 5) {
            $prims = (($this->salaire_base * 10) / 100) * ($y - 5);
        }

        $totale = $total_years + $bonus + $prims;
        return $totale;
    }
}

class Manager  extends Employe
{

    private int $taille_equipe;

    public function __construct(string $nom, string $prenom, DateTime $date_embauche, float $salaire_base, int $taille_equipe)
    {
        $this->taille_equipe = $taille_equipe;
        parent::__construct($nom, $prenom, $date_embauche, $salaire_base);
    }
    public function calculerSalaire()
    {
        $y = $this->anciennete();
        $prims = $this->taille_equipe * 200;
        $total_years = $y * $this->salaire_base;
        $bonus = 0;
        if ($this->taille_equipe > 10) {
            $bonus =  (($this->salaire_base * 15) / 100) * $y;
        }

        $totale = $total_years + $bonus + $prims;

        return $totale;
    }
}

class Commercial extends Employe
{
    private float $ca_mensuel;

    public function __construct(string $nom, string $prenom, DateTime $date_embauche, float $salaire_base, float $ca_mensuel)
    {
        $this->ca_mensuel = $ca_mensuel;
        parent::__construct($nom, $prenom, $date_embauche, $salaire_base);
    }
    public function calculerSalaire()
    {
        $y = $this->anciennete();
        $commision = ($this->ca_mensuel * 0.05) * 12;
        $totale_yars = $commision + $this->salaire_base;
        $totale = $totale_yars * $y;

        return $totale;
    }
}
// $e = new Developpeur('abdellaj', 'bhou', new DateTime('2013-01-10'), 4000);
// var_dump($e->calculerSalaire());

// echo "\n";

// $e1 = new Manager('abdellaj', 'bhou', new DateTime('2013-01-10'), 4000, 13);
// var_dump($e1->calculerSalaire());



$dev1 = new Developpeur(
    'bhou',
    'abdellah',
    new DateTime('2013-01-10'),
    4000,
);

$dev2 = new Developpeur(
    'swivi',
    'amin',
    new DateTime('2013-01-10'),
    6000,
);

$comer1 = new Commercial(
    'salim',
    'toti',
    new DateTime('2013-01-10'),
    4000,
    10000
);


$comer2 = new Commercial(
    'koki',
    'random',
    new DateTime('2013-01-10'),
    5000,
    10000
);

$man1 = new Manager(
    'sosi',
    'losi',
    new DateTime('2013-01-10'),
    4000,
    23
);

$man2 = new Manager(
    'omin',
    'lois',
    new DateTime('2013-01-10'),
    4000,
    2
);

$employes = [$dev1, $dev2, $comer1, $comer2, $man1, $man2];
$masse_salariale_totale = 0;
foreach($employes as $e ){
    // echo $e->calculerSalaire()."\n";
    $masse_salariale_totale += $e->calculerSalaire();
}

$mieux_salire = $employes[0]->calculerSalaire();
$miex_employe = null ;
echo "\n";
foreach ($employes as $e ) {
    if ($mieux_salire<$e->calculerSalaire()) {
        $mieux_salire = $e->calculerSalaire();
        $miex_employe = $e;
    }
}

$groupes = []; 
foreach ($employes as $e) {
    $type = get_class($e);              
    $groupes[$type][] = $e->calculerSalaire();    
}
var_dump($groupes);
foreach ($groupes as $type => $salaires) {
    $moyenne = array_sum($salaires) / count($salaires);
    echo "  - $type : " . number_format($moyenne, 2);
}