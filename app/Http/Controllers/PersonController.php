<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function __invoke()
    {
        $persons = [["id" => 1, "name" => "Sergey", "age" => 20], ["id" => 2, "name" => "Alex", "age" => 25], ["id" => 3, "name" => "Vlad", "age" => 30]];
        return $persons;
    }
}
