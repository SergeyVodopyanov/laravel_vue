<?php

namespace App\Http\Controllers\Person;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Person;

class DeleteController extends Controller
{
    public function __invoke(Person $person)
    {
        $person->delete();
        return response([], 228); //вот как нужно объявлять статус
    }
}
