<?php

use Illuminate\Support\Facades\Route;

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

// Component Routes
Route::statamic('component-a', 'component-a', [
    'title' => 'Component A - Blog Overview',
    'layout' => 'layout'
]);

// Component B is handled by the collection entry, so we don't need a route
