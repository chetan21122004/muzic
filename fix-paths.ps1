$files = Get-ChildItem -Path src -Recurse -Include "*.tsx","*.ts"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $updated = $content `
        -replace 'to="/contact"', 'to="/enquire"' `
        -replace 'to="/online-programs"', 'to="/online-music-classes-in-croydon-and-uk"' `
        -replace 'to="/blog"', 'to="/blogs"' `
        -replace 'to="/student-showcase"', 'to="/red-carpet"' `
        -replace 'to="/teach-with-us"', 'to="/careers"' `
        -replace 'to="/center"', 'to="/muziclub-baner"'

    if ($updated -ne $content) {
        Set-Content $file.FullName $updated -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}

Write-Host "Done."
